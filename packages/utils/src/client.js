// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import browserSize from 'browser-size'
import root from 'window-or-global'
import url from 'url'

/**
 * Utils for the Clientside
 */


/**
 * Get current width of browser via DOM API, default to 640px.
 * @returns {Number} - Width of browser in pixels or default.
 */
export function getBrowserWidth() {
  const min = 640
  if (global.window) {
    const {width} = browserSize()
    return width || min
  }
  return min
}

/**
 * Check if browser has SessionStorage feature.
 * @returns {Boolean} - True for SessionStorage in browser, False if not.
 */
export function hasSessionStorage() {
  const {sessionStorage} = root
  const mod = '_'

  try {
    sessionStorage.setItem(mod, mod)
    sessionStorage.removeItem(mod)
    return true
  }
  catch (error) {
    return false
  }
}

/**
 * Scroll to same height on browser screen as DOM element via DOM API.
 * @param {Object} element - Scroll to top of this element vertically.
 * @param {Number} [pad=-60] - Extra padding for precision, default -60 for
 *  static header component.
 */
export function scrollToSection(element, pad = -60) {
  const {scroll, setTimeout} = root
  if (element && 'getBoundingClientRect' in element) {
    const {top} = element.getBoundingClientRect()
    if (top) {
      setTimeout(() => scroll(0, top + pad), 0)
    }
  }
}

/**
 * Send GoogleAnalytics custom event triggers.
 * @param {String} href - Target URL event for tracking in GAnalytics
 * @requires react-g-analytics (or equivalent)
 */
export function triggerGAnalyticsEvent(href) {
  if (!href) return

  const {ga} = root
  const uri = url.parse(href)

  // g-analytics universal tracking (non-pageview)
  if (uri.protocol === 'mailto:') {
    // mailto links
    const email = uri.href.match(/^mailto:(.*?)$/)[1]
    ga('send', 'event', 'Mailto', email)
  }
  else if (uri.hostname === 'numenta.com' || !uri.hostname) {
    // internal asset links
    const ext = uri.pathname.split(/\./).pop()
    if (ext === 'pdf') {
      ga('send', 'event', 'Download', ext, uri.href)
    }
  }
  else {
    // external link
    ga('send', 'event', 'Outbound', uri.host, uri.path)
  }
}
