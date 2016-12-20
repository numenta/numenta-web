// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const TableCell = ({border, children, colSpan}) => {
  const classes = [styles.tableCell]

  if (border) classes.push(styles.border)

  return (
    <td className={classNames(...classes)} colSpan={colSpan}>
      {children}
    </td>
  )
}

TableCell.propTypes = {
  border: React.PropTypes.bool,
  children: React.PropTypes.node,
  colSpan: React.PropTypes.number.isRequired,
}

TableCell.defaultProps = {
  colSpan: 1,
}

export default TableCell
