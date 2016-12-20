// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import {config} from 'config'
import moment from 'moment'

/**
 * Utils Shared between Client and Server (Isomorphic, Universal, etc.)
 */


/**
 * Format a human-readable, display-ready version of a Post Item's (Blog,
 *  Event, etc.) occurance (start and end times). Can be complex as some events
 *  have only a start, some have both start+end, some are full-day, and some
 *  have specific times in the day. Input can be quite varied.
 * @param {Object} when - Post Item (like Blog or Event post), having start
 *  and end dates, etc. See the YAML headmatter for any blog/event post Markdown
 *  file.
 * @returns {String} - Human-readable beautiful display text.
 * @TODO `when` should be a site-wide class instead of messy custom object.
 */
export function getEventTimeDisplay(when) {
  const formatDate = config.moments.human
  const formatTime = 'h:mm A'
  const formatBegin = [formatDate]
  const formatEnd = [formatDate]
  const out = []
  let begin = null
  let end = null

  if (!when || !('begin' in when)) {
    return null
  }

  // discovery
  if (when.begin.match(' ')) {
    formatBegin.push(formatTime)
  }
  begin = moment(new Date(when.begin))

  if ('end' in when) {
    if (when.end.match(' ')) {
      formatEnd.push(formatTime)
    }
    end = moment(new Date(when.end))
  }

  // format output string
  out.push(begin.format(formatBegin.join(' ')))
  if (when.begin !== when.end) {
    if (begin.format(formatDate) === end.format(formatDate)) {
      formatEnd.shift()  // don't repeat Date twice
    }
    out.push('—')
    out.push(end.format(formatEnd.join(' ')))
  }

  return out.join(' ')
}

/**
 *
 */
export function getModalWidth(width, options) {
  const copy = (options && 'copy' in options) ? options.copy : false
  const pad = (options && 'pad' in options) ? options.pad : 120
  let long

  if (width > 1280) long = 1280
  else if (width > 1024) long = 1024
  else if (width > 720) long = 720
  else if (width > 640) long = 640
  else long = 480

  long -= pad

  if (copy && (long > 640)) long = 640

  return long
}

/**
 * Parse Video ID from URL, currently YouTube format http://youtu.be/VIDEO_ID
 * @param {String} url - Video URL to get Video ID from, as http://youtu.be/ID
 * @returns {String} - Video ID as parsed from URL
 */
export function getVideoIdFromUrl(url) {
  return url.match(/.*\/(.*)$/).pop()
}

/**
 *
 */
export function sortDateAscend(a, b) {
  const aDate = moment(a.data.date, config.moments.post)
  const bDate = moment(b.data.date, config.moments.post)

  if (aDate > bDate) return 1
  if (aDate < bDate) return -1
  return 0
}

/**
 *
 */
export function sortDateDescend(a, b) {
  const aDate = moment(a.data.date, config.moments.post)
  const bDate = moment(b.data.date, config.moments.post)

  if (aDate > bDate) return -1
  if (aDate < bDate) return 1
  return 0
}

/**
 *
 */
export function sortOrderAscend(a, b) {
  if (a.data.sort > b.data.sort) return 1
  if (a.data.sort < b.data.sort) return -1
  return 0
}

/**
 * Stamp a URL string with a version query param.
 * @param {String} url - URL string to stamp.
 * @param {String} version - Version string ("1.0.2") to use as stamp on URL.
 * @returns {String} - URL with Version stamp.
 */
export function stampUrl(url, version) {
  return `${url}?v=${version}`
}

/**
 * Template String to trim extra spaces from multiline es6 strings.
 * @param {Array} strings - Input string literals for es6 template string.
 * @param {...Array} [values] - Template string filler values.
 * @returns {String} - Completed and filled string.
 */
export function trims(strings, ...values) {
  let result = ''
  let i = 0
  let tmp

  while (i < strings.length) {
    tmp = strings[i]
    tmp = tmp.replace(/\n/g, ' ')
    tmp = tmp.replace(/\s+/g, ' ')
    result += tmp

    if (i < values.length) result += values[i]
    i += 1
  }

  return result
}
