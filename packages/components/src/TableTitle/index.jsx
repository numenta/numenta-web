// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


/**
 *
 */
const TableTitle = ({border, children, colSpan}) => {
  const classes = [styles.tableTitle]

  if (border) classes.push(styles.border)

  return (
    <th className={classNames(...classes)} colSpan={colSpan}>
      {children}
    </th>
  )
}

TableTitle.propTypes = {
  border: React.PropTypes.bool,
  children: React.PropTypes.node,
  colSpan: React.PropTypes.number.isRequired,
}

TableTitle.defaultProps = {
  colSpan: 1,
}

export default TableTitle
