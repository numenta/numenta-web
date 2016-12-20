// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


/**
 *
 */
const Subtle = ({children}) => (
  <span className={styles.subtle}>
    {children}
  </span>
)

Subtle.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Subtle
