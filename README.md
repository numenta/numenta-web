# Numenta Web Platform

Source code, generators, tooling, and content for Numenta websites and platform.

## Monorepo

This is a [monorepo](http://danluu.com/monorepo/), managed with
[Lerna.js](https://github.com/lerna/lerna). This monorepo contains several child
sub-repos (websites, shared components, utils) located in the `/packages`
directory.

## Filesystem

```shell
.                     # https://github.com/numenta/numenta-web/
├── .babelrc          # Babel ES6 transpiler configuration file
├── .eslintignore     # ES lint files and paths to ignore during run
├── .eslintrc.json    # JS ES6 lint rules, AirBnB defaults + tweaks
├── .jestrc.json      # Jest test framework setup, assets under __tests__/ dirs
├── .stylelintignore  # CSS style lint files to ignore
├── .stylelintrc      # CSS style lint rules
├── LICENSE.txt       # Open Source MIT License information
├── README.md         # This file, welcome documentation
├── __tests__/        # Shared Tests and Test Setup
├── coverage/         # Target for Test Code Coverage reports (not in git)
├── lerna.json        # Lerna.js monorepo tool config file.
├── node_modules/     # `npm` module install target (not in git)
├── package.json      # Skeleton monorepo project config
└── packages/         # Child sub-repos of our Lerna monorepo, details below
    ├── components/   # Shared React View Components to be used amongst sites
    ├── numenta.com/  # http://numenta.com Numenta Company website source code
    ├── numenta.org/  # http://numenta.org HTM Community website source code
    └── utils/        # Shared helper utils to be used amongst sites.
```

## Setup

These instructions assume latest Mac OS/X with [homebrew](http://brew.sh/)
package manager installed. Other platforms should come up just as easily.

```shell
brew install git node
git clone git@github.com:numenta/numenta-web.git
cd numenta-web/
npm install
```

***You should now be ready to run any of the child Website repos, further
details below.***

### Updating

If you update the child repos and need to re-sync everything back together
again, just re-run `npm install` from the monorepo root.

## Linting

To run All Linting checks against JS, CSS, etc:

```shell
npm run lint
```

## Testing

To run All Tests (unit, etc):

```shell
npm run test
```

### Unit

Run only unit tests:

```shell
npm run test:unit
```

Unit tests take and use snapshots in order to perform. Make sure new or updated
snapshots are correct before committing! To update these snapshots, try running:

```shell
npm run test:unit:update
```

Run the command below to generate a Unit Test Code Coverage report, which will
be saved in your local `./coverage` directory.

```shell
npm run test:unit:coverage

# open nice coverage report in browser (Mac OS/X)
open ./coverage/lcov-report/index.html
```

Run unit tests while watching filesystem for changes in realtime (requires
3rd-party [Watchman](https://facebook.github.io/watchman/) to be installed
first):

```
brew install watchman
npm run test:unit:watch
```

### Hyperlinks

```shell
# Test hyperlinks on http://0.0.0.0:8000.
#   You probably have `npm run serve` ready in another terminal window or
#   background job process. Or, you could do `npm run build` and run an http
#   server on the contents of `public/`.
npm run test:links -- http://localhost:8000

# Test hyperlinks on staging or production
npm run test:links -- http://staging.numenta.com
npm run test:links -- http://numenta.com
```


# Websites

**Please change directories to one of the individual website sources, i.e.:**

```shell
cd packages/numenta.com/
```

**The rest of this section will assume you are in one of the website
sub-directories.**

## Goals

These sites are an attempt at getting back to the roots of the web: *reading*.
[Inspired by](http://numenta.com/blog/2016/09/02/why-did-we-completely-change-our-website-design-the-story-behind-our-new-look/)
the classic design of [Wikipedia](https://en.wikipedia.org/wiki/Numenta), we
hope our sites will be easy to read, helpful for finding information quickly,
simple to navigate, and a delight to interact with.

Moving from full statically-generated multi-page websites, to single one-page
web applications, is a tricky proposition. Search engine ranking can be
affected negatively, as important internal pages and links would disappear.
Navigating the user to one of many collapsable sections on a long page can be
difficult. Accessible, legacy, and unique browsers cannot usually support the
modern technology required for single-page web applications.

To solve these challenges, while still accomplishing our goals, we have built
these as **hybrid** websites. They are **both** classic statically-generated
multi-page websites, and also modern single-page web applications. All clients
load the classic static sites initially, and then modern clients will be
augmented with the single-page applications. This is accomplished with the magic
of ["universal" or "isomorphic" javascript](http://isomorphic.net/), which means
that the exact same code is used to generate the static sites on the server, and
then is loaded on the clients to continue the applications live.

[Gatsby.js](https://github.com/gatsbyjs/gatsby) is the amazing tool that helps
us accomplish all of this.

## Stack

* Script
  * ECMAscript [ES6](https://github.com/lukehoban/es6features) (Javascript)
    * [Node.js 6](https://nodejs.org) engine with
      [Npm 3](https://www.npmjs.com/) JS packaging
    * [Babel](https://babeljs.io/) Transpiler down to older cross-browser JS
    * Testing via [Jest](https://facebook.github.io/jest/) (on top of
      [Jasmine](https://github.com/jasmine/jasmine))
      * This supports our complex Babel,
      [Webpack](https://facebook.github.io/jest/docs/tutorial-webpack.html),
      and [React](https://facebook.github.io/jest/docs/tutorial-react.html)
      needs with it's [moduleNameMapper](https://facebook.github.io/jest/docs/configuration.html#modulenamemapper-object-string-string)
      stubbing feature.
    * [ESLint](http://eslint.org/)+Babel code style checking ("linting")
  * [Gatsby.js](https://github.com/gatsbyjs/gatsby) static site generator,
    which wraps:
    * [Webpack](https://webpack.github.io/) module loader/bundler
      * [Static Generator Plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin)
        webapck plugin
    * [React.js](https://facebook.github.io/react/) reactive view components in
      [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) format
    * [Lunr](http://lunrjs.com/) client-side fulltext site search
* Style
  * [Tachyons](http://tachyons.io/) Responsive style library, composed via
    [CSS Modules](https://github.com/css-modules/css-modules)
  * Format checking by [stylelint](https://github.com/stylelint/stylelint)
* Markup
  * [Markdown](https://guides.github.com/features/mastering-markdown/) source
    files, which Gatsby hands to
    [markdown-it](https://github.com/markdown-it/markdown-it)
  * [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) spec
* Assets
  * [React Icon Library](http://gorangajic.github.io/react-icons/)
  * Images: [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) best,
    then [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics), etc
  * Icons autogenerated by
    [Favicons](https://github.com/jantimon/favicons-webpack-plugin)
    webpack plugin

## Server

### Filesystem

***The contents of each individual website source directory
(i.e. `cd packages/numenta.com/`) will look like the following:***

```shell
.                       # Inside `packages/numenta.com/` or similar
├── __tests__/          # Site-specific Tests
├── components/         # React view Components, Assets, and Tests (HTML/CSS/JS)
├── config.toml         # Configuration setings for Gatsby static site generator
├── gatsby-browser.js   # Browser-specific code, tied to React Router by Gatsby
├── gatsby-node.js      # Build-time, Node.js, Webpack & Server specific code
├── html.jsx            # Main HTML Document Component
├── package.json        # Project scripts, settings, and `npm` dependency lists
├── pages/              # Webpage Documents and URL Tree Structure
├── public/             # STATIC OUTPUT. Static website generated built files
├── static/             # Static html, styles, assets, etc. Copied after build.
├── utils/              # Local Helpers, utils, client, and misc code
└── wrappers/           # Document-type (.html, .md, etc.) wrapper Components
```

### Lifecycle

@TODO - talk about how dynamic dev works, how builds work, trace how content
works it's way through components, pages, \_templates, html.jsx, webpack,
gatsby, etc, etc. Gatsby's docs have some of this to build on (and maybe we can
contribute back).

## Client

### Lifecycle

#### Baseline

All browsers and clients will start by loading a classic, simple,
statically-generated, multi-page site. This guarantees that all users will
receive a decent baseline experience, especially on older, accessible, or unique
browsers. This also gives robots and search engine crawlers to have many
internal pages to link and index.

#### Advanced / Targets

After loading the baseline experience, modern clients (listed in the support
table below) will then be augmented with an advanced single-page style web
application. This lets us simulate a large single main page, with many
collapsable sections, much like Wikipedia. This also provides fast "no-refresh"
page transitions, a full client-side text search system, etc.

**Note:** *All versions are "Latest Stable" unless otherwise noted.*

|             | Chrome | Firefox | Safari | Edge | IE/11 | IE/10 | Android |
| ----------- |:------:|:-------:|:------:|:----:|:-----:|:-----:|:-------:|
| **Mac/OSX** |    ✓   |    ✓    |    ✓   |      |       |       |         |
| **iOS**     |        |         |    ✓   |      |       |       |         |
| **Android** |    ✓   |         |        |      |       |       |    ✓    |
| **Win/10**  |    ✓   |    ✓    |        |   ✓  |       |       |         |
| **Win/8**   |        |         |        |      |   ✓   |       |         |
| **Win/7**   |        |         |        |      |       |   ✓   |         |
| **Linux**   |    ✓   |    ✓    |        |      |       |       | &nbsp;  |

## Build

***Builds should be run from inside each websites individual source
directory (`cd packages/numenta.com/`).***

Average build wait times:

| Environments | 4x 2.8ghz 16gb | 2x 2.6ghz 8gb |
| ------------ | -------------- | ------------- |
| Dynamic Dev  | ~10s           | ~20s          |
| Static (Any) | ~6m            | ~12m          |

Additional Notes:

* **Config:** Unless otherwise stated below, the `config.toml` file should have
  the default empty `linkPrefix` setting:

  ```shell
  # config.toml
  linkPrefix = ""
  ```

* **Disqus Comments:** Disqus Comments only work on Production by default, not
  under Development, Staging, etc. You can test/verify outside Prod by sending
  an override production Post URL to Disqus
  [via the component, here](https://github.com/numenta/numenta-web/blob/master/numenta.com/components/Disqus/index.jsx#L34-L40).

### Development

#### Dynamic

```shell
npm run dev
# Visit http://localhost:8000
```

Additional Notes:

* **Static Assets:** Static assets won't load correctly from `static/assets`
  during dynamic dev, but they will be fine later on staging and production
  after static build. Try the static dev (next section below) if you need the
  static asset links to work during development.

* **Specific Local IP:** If you need to host via a specific local IP (testing on
  a VM, etc.), `gatsby` options can be passed to `npm run` like this:

  ```shell
  npm run dev -- --host 192.168.1.112 --port 8765
  # Visit http://192.168.1.112:8765
  ```

* **Search:** To get search working under local dynamic development mode, you
  first need to build the search index, and then copy the index over to where it
  will be accessible by the dev webserver:

  ```shell
  npm run build
  cp public/_searchIndex.json pages/.
  ```

#### Static

```shell
npm run serve
# Visit http://localhost:8000
```

### Integration

Update Gatsby config for GitHub Pages (gh-pages) integration targets. Modify
`config.toml` and set (but DO NOT commit):

```shell
# config.toml
linkPrefix = "/numenta-web"
```

And then run an integration build:

```shell
npm run build
```

#### Personal

Push build to personal fork `origin:gh-pages` integration hosting branch:

(Note: This will remove any other gh-pages site staged on that branch).

```shell
npm run deploy:gh-pages
npm run deploy:gh-pages -- --remote origin  # same thing
# Visit http://fork.github.io/numenta-web/
```

#### Shared

Push build to shared `upstream:gh-pages` integration hosting branch:

(Note: This will remove any other gh-pages site staged on that branch).

```shell
# Deploy master branch public/ to upstream:gh-pages branch
npm run deploy:gh-pages -- --remote upstream

# Visit http://numenta.github.io/numenta-web/
```

## Guidance

Code standards are handled by their respective linters and lint configs (for
example, see the local file `.eslintrc.json`).

### Components

* Pages and Main Sections:
  * Main Sections (pages grouped on our Wikipedia-like single-page app
    homepage) have their actual content in each pages' `pages/*/_Section.jsx`
    file
    * These main Sections are exposed as individual Pages via each pages'
      default `pages/*/index.jsx` component
  * Regular Pages (non-Main Sections) are fully contained in the usual default
    `pages/*/index.jsx` location
* Each `React` Component should return 1 small element
* Include spaces manually around React Elements in JSX with: `{' '}`
* Custom [React context](https://facebook.github.io/react/docs/context.html)
  which is available (in addition to Gatsby defaults):
  * `config` = Site config object (see: `config.toml`).
  * `manifest` = Site `package.json` manifest object vars like `repo`, 'version`
  * `stamp` = Build start timestamp string (for cache-busting)
* Make sure to use the `prefixLink()` helper function on all internal links.
  This should be handled auto-magically for you already, but if you have trouble
  with links on staging, this may be the problem

### Content

* Markdown link target filenames with spaces must be quoted:
  `[link text]("spaces in filename.txt")`
* Markdown YAML headmatter: be careful with quotes and escaping titles, etc.
* Beware extra Markdown
  [typographer shortcuts](https://github.com/jonschlinkert/remarkable#typographer)
* Internal flat markdown auto-links (`http://numenta.com/htm-studio/`) may break
  on staging servers, use markdown style instead:
  `[http://numenta.com/htm-studio/](/htm-studio/)`
* Search Engine Optimization (SEO) notes:
  * @TODO more basics here.
  * Make sure to follow the **URL Format** notes further below.

### Links and URLs

#### URL Format

* URLs should end with `/` (slash)
* Examples of ideal URLs detailed below:
  * `http://numenta.com/`
  * `http://numenta.com/machine-intelligence-technology/`
  * `http://numenta.com/business-strategy-and-ip/#licenses`
  * `http://numenta.org/`
  * `http://numenta.org/htm-school/`

#### Possible Link Situations

* @TODO list files here with lots of link/href/URL-related code. And Refactor.
* Google Analytics should be tracking `pages` and `events` for all Situations
  in the matrix below.

| Host     | Type              | .jsx Source    | .md Source     |
| -------- | ----------------- | -------------- | -------------- |
| Internal | Path              | [View][link1]  | [View][link7]  |
| Internal | Anchor            | [View][link2]  | [View][link8]  |
| Internal | Asset (/assets/*) | [View][link3]  | [View][link9]  |
| Internal | Asset (*/.pdf)    | N/A            | [View][link13] |
| External | Path              | [View][link4]  | [View][link10] |
| External | Anchor            | [View][link5]  | [View][link11] |
| External | Protocol          | [View][link6]  | [View][link12] |

[link1]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/open-source-community/_Section.jsx#L58
[link2]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/applications/_Section.jsx#L178
[link3]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/applications/_Section.jsx#L248
[link4]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/applications/_Section.jsx#L207
[link5]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/applications/_Section.jsx#L213
[link6]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/partners/_Section.jsx#L48
[link7]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2016/02/11/numenta-anomaly-benchmark-contest-ieee-wcci-2016.md
[link8]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2016/06/16/can-neuroscientists-understand-the-brain.md
[link9]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2014/08/18/progress-at-numenta.md
[link10]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2014/09/17/increasing-research-transparency.md
[link11]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2013/02/11/super-bowl-neuroscience.md
[link12]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2016/02/11/numenta-anomaly-benchmark-contest-ieee-wcci-2016.md#numenta-anomaly-benchmark-nab-competition
[link13]: https://github.com/numenta/numenta-web/blob/master/numenta.com/pages/blog/2016/03/30/numenta-at-computational-and-systems-neuroscience-conference.md

### Packages

* Use exact versions for dependencies in `package.json`
* Keep packages as up-to-date as possible: `npm outdated -depth 0`
* Update and test 1 package at a time for safety

### Styles

* `CSS Module` Composition order:

  1. Compose from Tachyons classes
  1. Compose from Site Theme classes (Numenta colors)
  1. Compose from \_local_file_custom classes
  1. Specific custom CSS overrides

  Example:
  ```css
  ._visited:visited {
    color: #1aa0db;
  }

  .iconlink {
    composes: dim from 'tachyons';
    composes: link from 'tachyons';
    composes: color-blue from '../../assets/css/theme.css';
    composes: _visited;
    opacity: 0.5;
  }
  ```


# Contributing

These projects are open source, and
[Pull Requests](https://help.github.com/articles/about-pull-requests/) are
welcome. Contributors, please sign and submit our
[Contributor License](http://numenta.org/licenses/cl/).

If you'd like to help, please make your own fork of this repo, and work from
branches in your fork. Pull Requests should be between your fork, and our main
repo. This will keep our main repo clean of working branches.

**Before** submitting Pull Requsts, please make sure you have successfully
`linted` and `tested` your change branch.


# License

```
Numenta Web Platform and Sites source code
MIT License (see LICENSE.txt)
Copyright © 2005—2017 Numenta <http://numenta.com>
```
