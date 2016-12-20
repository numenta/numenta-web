// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import IconAngleUp from 'react-icons/lib/fa/angle-up'
import {prefixLink} from 'gatsby-helpers'
import React from 'react'
import root from 'window-or-global'

import {hasSessionStorage} from 'numenta-web-shared-utils/lib/client'

import SectionTitle from '../SectionTitle'

import styles from './index.css'


/**
 * Main HTML Section for each site - React view component.
 */
class Section extends React.Component {

  static contextTypes = {
    config: React.PropTypes.object,
    router: React.PropTypes.object,
  }

  static defaultProps = {
    headline: false,
    open: false,
  }

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    headline: React.PropTypes.bool.isRequired,
    id: React.PropTypes.string,
    open: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = {
      open: props.open || false,
    }
  }

  _toggleSection() {
    const {ga, history, sessionStorage} = root
    const {url} = this.props
    const open = !this.state.open
    const hasStorage = hasSessionStorage()

    // Handle dynamic url changes as sections are opened/closed.
    if (open) {
      history.pushState({}, '', prefixLink(url))
      ga('set', 'page', prefixLink(url))
      ga('send', 'pageview')

      // mark section state as Open in browser sessionStorage
      if (hasStorage) sessionStorage.setItem(url, 'open')
    }
    else {
      // mark section state as Closed in browser sessionStorage
      if (hasStorage) sessionStorage.removeItem(url)  // eslint-disable-line
    }

    this.setState({open})
  }

  render() {
    const {children, headline, id, title} = this.props
    const {open} = this.state
    const isHeadline = headline === true
    const isOpen = open === true
    const articleClasses = [styles.article, styles.closed]
    let close

    if (isOpen) articleClasses.pop()

    if (!isHeadline) {
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      close = (
        <div
          className={styles.closeButton}
          onClick={() => this._toggleSection()}
          title={`Close Section: ${title}`}
        >
          <IconAngleUp className={styles.closeIcon} color="inherit" />
          Close Section
        </div>
      )
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    }

    return (
      <section id={id} className={styles.section}>
        <SectionTitle
          clickHandle={() => this._toggleSection()}
          headline={headline}
          open={open}
          title={`${open ? 'Close' : 'Open'} Section: ${title}`}
        >
          {title}
        </SectionTitle>
        <div className={classNames(...articleClasses)}>
          {children}
          {close}
        </div>
      </section>
    )
  }

}

export default Section
