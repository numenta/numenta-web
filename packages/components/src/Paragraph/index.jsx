// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const Paragraph = ({children, lead}) => {
  const classes = [styles.paragraph]

  if (lead === true) classes.push(styles.lead)

  return (
    <p className={classNames(...classes)}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: React.PropTypes.node,
  lead: React.PropTypes.bool,
}

Paragraph.defaultProps = {
  lead: false,
}

export default Paragraph
