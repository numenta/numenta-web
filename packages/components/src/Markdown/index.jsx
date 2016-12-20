// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import catchLinks from 'catch-links'
import {prefixLink} from 'gatsby-helpers'
import React from 'react'
import root from 'window-or-global'
import url from 'url'

import {triggerGAnalyticsEvent} from 'numenta-web-shared-utils/lib/client'

import styles from './index.css'


/**
 * Markdown content block wrapper - React view component.
 */
class Markdown extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
  }

  static contextTypes = {
    route: React.PropTypes.object,
    router: React.PropTypes.object,
  }

  componentDidMount() {
    const {router} = this.context
    const {location} = root

    if (!this._markdown) return

    // Take over markdown local content links, local links now in Single-page
    //  app mode - also handling staging prefixLinks.
    catchLinks(this._markdown, (href) => {
      const target = url.parse(href)
      const newHref = prefixLink(href)

      if (!target.host && !target.hash && (
        target.pathname.match(/^\/assets\//) || target.pathname.match(/\.pdf$/)
      )) {
        triggerGAnalyticsEvent(newHref)
        location.href = newHref  // go to internal asset
      }
      else if (!target.host && target.hash && (
        target.pathname === location.pathname
      )) {
        location.hash = target.hash  // go to anchor on same page / browser
      }
      else {
        router.push(newHref)  // same site react-routed single-page
      }
    })
  }

  render() {
    const {children} = this.props

    return (
      <div
        className={styles.markdown}
        ref={(ref) => this._markdown = ref}
      >
        {children}
      </div>
    )
  }

}

export default Markdown
