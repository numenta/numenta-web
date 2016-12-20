// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const DefineList = ({children, direction}) => {
  const classes = [styles.defineList, styles[direction]]
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {direction})
  )

  return (
    <dl className={classNames(...classes)}>
      {childrenWithProps}
    </dl>
  )
}

DefineList.propTypes = {
  children: React.PropTypes.node.isRequired,
  direction: React.PropTypes.oneOf(['horizontal', 'vertical']),
}

DefineList.defaultProps = {
  direction: 'vertical',
}

export default DefineList
