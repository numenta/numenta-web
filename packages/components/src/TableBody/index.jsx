// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


/**
 *
 */
const TableBody = ({border, children}) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {border})
  )

  return (
    <tbody className={styles.tableBody}>
      {childrenWithProps}
    </tbody>
  )
}

TableBody.propTypes = {
  border: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
}

export default TableBody
