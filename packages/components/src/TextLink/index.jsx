// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import {IndexLink, Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import React from 'react'

import {triggerGAnalyticsEvent} from 'numenta-web-shared-utils/lib/client'

import styles from './index.css'


/**
 * HTML Text Link - React view component.
 */
const TextLink = ({children, onClick, target, to}) => {
  const instrumentOnClick = (event) => {
    // send ga event for asset link/download
    triggerGAnalyticsEvent(event.target.getAttribute('href'))
    if (onClick) return onClick(event)  // augment
    return true
  }
  const attrs = {
    // default internal non-index link
    className: styles.textlink,
    onClick: instrumentOnClick,
    target,
    to: prefixLink(to),
  }
  let Node = Link

  if (to && (
    to.match(/^.+:/) || to.match(/^\/assets\//) || to.match(/\.pdf$/)
  )) {
    // external link (browser location)
    Node = 'a'
    if (to.match(/^.*:/)) {
      attrs.href = to  // = mailto:etc@blah.com
    }
    else if (to.match(/^\/assets\//) || to.match(/\.pdf$/)) {
      attrs.href = prefixLink(to)  // = /assets/etc/
    }
    delete attrs.to
  }
  else if (to === '/') {
    // internal index main/home link
    Node = IndexLink
  }

  return (
    <Node {...attrs}>
      {children}
    </Node>
  )
}

TextLink.propTypes = {
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func,
  target: React.PropTypes.string,
  to: React.PropTypes.string.isRequired,
}

export default TextLink
