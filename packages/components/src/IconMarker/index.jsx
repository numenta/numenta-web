// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import IconArrowRight from 'react-icons/lib/fa/arrow-circle-o-right'
import React from 'react'

import styles from './index.css'


const IconMarker = ({children, icon}) => (
  <span className={styles.iconMarker}>
    <span className={styles.icon}>
      {icon}
    </span>
    {children}
  </span>
)

IconMarker.propTypes = {
  children: React.PropTypes.node.isRequired,
  icon: React.PropTypes.element,
}

IconMarker.defaultProps = {
  icon: (<IconArrowRight />),
}

export default IconMarker
