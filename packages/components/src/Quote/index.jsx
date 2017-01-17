// Numenta Web Platform and Sites source Quote
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


/**
 * Quotation with possible Citation - React view component.
 */
const Quote = ({children, citation}) => {
  let footer

  if (citation) {
    footer = (
      <footer className={styles.footer}>
        <span className={styles.dash}>―</span>
        <cite className={styles.cite}>
          {citation}
        </cite>
      </footer>
    )
  }

  return (
    <blockquote className={styles.blockquote}>
      <p className={styles.paragraph}>
        “{children}”
      </p>
      {footer}
    </blockquote>
  )
}

Quote.propTypes = {
  children: React.PropTypes.node.isRequired,
  citation: React.PropTypes.string,
}

export default Quote
