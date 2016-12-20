// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


const ListOrder = ({children, copy, marker}) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {copy, marker})
  )

  return (
    <ol className={styles.ol}>
      {childrenWithProps}
    </ol>
  )
}

ListOrder.propTypes = {
  children: React.PropTypes.node.isRequired,
  copy: React.PropTypes.bool,
  marker: React.PropTypes.oneOf(['decimal', 'disc']),
}

ListOrder.defaultProps = {
  copy: true,
}

export default ListOrder
