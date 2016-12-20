// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const DefineItem = ({children, direction}) => {
  const classes = [styles.defineItem]

  if (direction) classes.push(styles[direction])

  return (
    <dd className={classNames(...classes)}>
      {children}
    </dd>
  )
}

DefineItem.propTypes = {
  children: React.PropTypes.node.isRequired,
  direction: React.PropTypes.oneOf(['horizontal', 'vertical']),
}

export default DefineItem
