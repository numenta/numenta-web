// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import root from 'window-or-global'
import {scrollToSection} from 'numenta-web-shared-utils/lib/client'


/**
 * Gatsby event handler bridge to React-Router, fires every time URL changes
 *  within the clientside Single-Page-App mode.
 */
export function onRouteUpdate() {
  const {location} = root
  const {hash} = location

  // if url has #hash try to scroll to it
  if (hash !== '') {
    const id = hash.replace('#', '')
    const element = global.document.getElementById(id)
    scrollToSection(element)
  }
}
