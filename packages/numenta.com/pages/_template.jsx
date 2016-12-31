// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import {config} from 'config'
import favicons from 'favicons/config/html'
import flatten from 'lodash/flatten'
import GoogleAnalytics from 'react-g-analytics'
import Helmet from 'react-helmet'
import injectTapEventPlugin from 'react-tap-event-plugin'
import keys from 'lodash/keys'
import mapValues from 'lodash/mapValues'
import moment from 'moment'
import {prefixLink} from 'gatsby-helpers'
import React from 'react'
import values from 'lodash/values'

import Layout from '../components/Layout'
import manifest from '../package'

import 'tachyons-base/css/tachyons-base.css'  // eslint-disable-line import/first, max-len
import '../static/assets/css/fonts.css'

const {stampUrl} = require('numenta-web-shared-utils/universal')


/**
 * Root Gatsby Template, acts as React-router bridge (per Gatsby), and internal
 *  Layout and Headmatter manager.
 */
class Template extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    route: React.PropTypes.object.isRequired,
  }

  static childContextTypes = {
    config: React.PropTypes.object,
    manifest: React.PropTypes.object,
    route: React.PropTypes.object,
    stamp: React.PropTypes.string,
  }

  getChildContext() {
    const {stamp} = global
    const {route} = this.props
    return {config, manifest, route, stamp}
  }

  componentDidMount() {
    if ('window' in global) injectTapEventPlugin()  // remove @ React 1.0
  }

  render() {
    const {stamp} = global
    const {children} = this.props
    const {analytics, company, description, siteHost} = config
    const lang = 'en'  // @TODO i18n l10n
    const now = moment().toString()
    const title = `${siteHost} • ${description}`
    const titleForm = `${siteHost} • %s`
    const icons = flatten(values(mapValues(favicons, (value) => keys(value))))

    // react-helmet / head
    const attrs = {lang}
    const links = []
    const meta = [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'author', content: `${company}`},
      {name: 'description', content: title},
      {name: 'keywords', content: title.split(' ').join(',')},
      {
        name: 'generator',
        content: `© ${siteHost} v${stamp} ${now} • Gatsby.js`,
      },
    ]

    // production stylesheet bundle
    if (process.env.NODE_ENV === 'production') {
      links.push({
        rel: 'stylesheet',
        href: prefixLink(stampUrl('/styles.css', stamp)),
      })
    }

    // push auto-generated favicons into react-helmet header link and meta
    icons.forEach((icon) => {
      const type = icon.match(/^(\w+)\[/).pop()
      const target = (type === 'link') ? links : meta
      const details = {}
      /* eslint-disable no-useless-escape */
      icon.match(/\[.+?\]/g)
        .forEach((detail) => {
          const line = detail.replace(/[\[\]]/g, '')
          const [key, value] = line.split(/\$?=/)
          const clean = value.replace(/'/g, '')
          details[key] = (key === 'href') ? prefixLink(`/${clean}`) : clean
        })
      /* eslint-enable no-useless-escape */
      target.push(details)
    })

    return (
      <Layout>
        <GoogleAnalytics id={analytics.google} />
        <Helmet
          defaultTitle={title}
          htmlAttributes={attrs}
          link={links}
          meta={meta}
          titleTemplate={titleForm}
        />
        {children}
      </Layout>
    )
  }

}

export default Template
