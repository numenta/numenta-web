// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import config from './configMock'
import post from './postMock'

const context = {
  config,
  manifest: {
    repository: {
      type: 'git',
      url: 'https://github.com/numenta/numenta-web',
    },
  },
  route: {
    page: post,
    pages: [post],
  },
  router: {
    createHref() {},
    go() {},
    goBack() {},
    goForward() {},
    isActive() {},
    push() {},
    replace() {},
    setRouteLeaveHook() {},
  },
  stamp: '1318874398',  // moment().unix().toString()
}


/**
 * Jest test React Context mock.
 * @requires jest webpack
 */

export default context
