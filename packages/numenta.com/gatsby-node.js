// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

/* eslint-disable no-console */

import {createSitemap} from 'sitemap'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import FaviconsPlugin from 'favicons-webpack-plugin'
import fs from 'fs'
import htmlToText from 'html2plaintext'
import {ncp} from 'ncp'
import {resolve} from 'path'
import toml from 'toml'

// Default max of 10 EventEmitters is not enough for our MainSections, bump up.
require('events').EventEmitter.prototype._maxListeners = 20  // eslint-disable-line max-len, no-underscore-dangle

/**
 * Gatsby.js Node server-side specific functions.
 *  1. modifyWebpackConfig()
 *  2. postBuild()
 * @see https://github.com/gatsbyjs/gatsby#structure-of-a-gatsby-site
 */

const config = toml.parse(fs.readFileSync(`${__dirname}/config.toml`))


/**
 * Gatsby augment WebPack loaders config.
 * @param {Object} webpack - Previous Gatsby Webpack Configurator object
 * @param {String} env - Gatsby Environment Runway ('develop', etc.)
 * @returns {Object} - Next Gatsby Webpack Configurator object
 * @see https://github.com/gatsbyjs/gatsby#how-to-use-your-own-webpack-loaders
 */
export function modifyWebpackConfig(webpack, env) {
  const cssOptions = [
    'importLoaders=1',
    'localIdentName=[name]_[local]_[hash:base64:5]',
    'modules',
  ].join('&')
  const cssModules = `css?${cssOptions}`

  // turn on debugging for all
  webpack.merge({debug: true})

  // let shared modules in parent dir find webpack loaders in node_modules/
  webpack.merge({
    resolveLoader: {
      fallback: resolve(__dirname, 'node_modules'),
    },
  })

  // dev source maps
  if (env === 'develop') {
    console.log(env, 'Enabling dev sourcemaps...')
    webpack.merge({devtool: 'source-map'})
  }

  // css modules
  webpack.removeLoader('css')
  if (env === 'develop') {
    console.log(env, 'Init CSS Modules in Development mode...')
    webpack.loader('css', {
      test: /\.css$/,
      loaders: ['style', cssModules, 'postcss'],
    })
  }
  else {
    console.log(env, 'Init CSS Modules in Production mode...')
    webpack.loader('css', {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', [cssModules, 'postcss']),
    })
    webpack.merge({
      plugins: [new ExtractTextPlugin('styles.css', {ignoreOrder: true})],
    })
  }

  // bitmap images with file-loader (like gatsby svg default)
  webpack.removeLoader('gif')
  webpack.removeLoader('jpg')
  webpack.removeLoader('png')
  webpack.loader('gif', {
    test: /\.(gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loaders: ['file-loader'],
  })
  webpack.loader('jpg', {
    test: /\.(jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loaders: ['file-loader'],
  })
  webpack.loader('png', {
    test: /\.(png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loaders: ['file-loader'],
  })

  // favicons-webpack-plugin
  if (env === 'build-html') {
    console.log(env, 'Auto-generating Icons...')
    webpack.merge({
      plugins: [
        new FaviconsPlugin({
          background: '#fff',
          emitStats: false,
          inject: false,
          logo: 'static/assets/img/mark.png',
          persistentCache: true,
          prefix: '/',
          title: config.siteHost,
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: true,
            favicons: true,
            firefox: true,
            windows: true,
            yandex: true,
          },
        }),
      ],
    })
  }

  // webpack path: static asset build + config:linkPrefix (gh-pages, etc)
  if (env !== 'develop') {
    console.log(env, 'Init correct webpack asset publicPath in Prod mode...')
    webpack.merge({
      output: {publicPath: `${config.linkPrefix}/`},
    })
  }


  return webpack
}

/**
 * Gatsby post-build callback.
 *  1. Build client-side search index
 *  2. Build XML sitemap for search crawlers
 *  3. Copy static assets to build output dir
 * @param {Array} pages - List of built pages
 * @param {Function} [callback] - Node-style async function(error, result) {}
 * @returns {Function} - Executed async callback function
 * @see https://github.com/gatsbyjs/gatsby#perform-additional-post-build-step
 */
export function postBuild(pages, callback) {
  // prep search index
  const searchSkip = [
    '/blog/',
    '/events/',
    '/newsletter/',
    '/press/',
    '/sitemap/',
  ]
  const dataSkip = ['author', 'date', 'org', 'title']
  const eventSkip = ['what', 'who', 'why']
  const searches = pages
    .filter((page) => (
      page.path &&
      !page.path.match(/\/papers\/.*\//) &&
      searchSkip.indexOf(page.path) === -1
    ))
    .map(({data, path}) => {
      const html = fs.readFileSync(`./public/${path}/index.html`).toString()
      const title = html
        .match(/<title[\s\S]*?>([\s\S]*?)<\/title>/)[1]
        .replace(/ \| Numenta.com$/, '')
      const markup = html
        .match(/<main[\s\S]*?>([\s\S]*?)<\/main>/)[1]
        .replace(/<!--.*?-->/g, ' ')
        .replace(/\n+/g, ' ')
      const content = htmlToText(markup)
        .replace(/\\n/g, ' ')
        .replace(/[^\x00-\x7F]/g, ' ')
        .replace(/\s+/g, ' ')
      const details = Object
        .keys(data)
        .filter((key) => (
          typeof data[key] === 'string' &&
          data[key].length &&
          dataSkip.indexOf(key) !== -1
        ))
        .map((key) => data[key])
      if ('event' in data) {
        details.push(
          Object
            .keys(data.event)
            .filter((key) => (
              typeof data[key] === 'string' &&
              data[key].length &&
              eventSkip.indexOf(key) !== -1
            ))
            .join(' ')
        )
        if ('where' in data.event) {
          details.push(
            Object
              .keys(data.event.where)
              .filter((key) => (
                typeof data[key] === 'string' &&
                data[key].length
              ))
              .join(' ')
          )
        }
      }
      const text = [title, content, details.join(' ')].join(' ')
      return {path, text, title}
    })
  // prep sitemap
  const urls = pages
    .filter((page) => (
      page.path && !page.path.match(/htm-studio\/faq/)
    ))
    .map(({path}) => ({
      url: path,
      changefreq: 'monthly',  // 'daily' @TODO dynamic per file dates, etc
      priority: 0.5,  // @TODO dynamic per url length (shorter=higher)
    }))
  const sitemap = createSitemap({
    hostname: 'http://numenta.com',  // @TODO stringify hostname in config
    urls,
  })

  console.log('postBuild generate search index')
  fs.writeFileSync('public/_searchIndex.json', JSON.stringify(searches))

  console.log('postBuild generate sitemap')
  fs.writeFileSync('public/sitemap.xml', sitemap.toString())

  console.log('postBuild static asset copy')
  return ncp('static/', 'public/', callback)
}

/* eslint-enable no-console */
