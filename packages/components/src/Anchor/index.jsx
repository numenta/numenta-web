// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


const Anchor = ({name}) => (
  <span className={styles.anchor} id={name} />
)

Anchor.propTypes = {
  name: React.PropTypes.string.isRequired,
}

export default Anchor
