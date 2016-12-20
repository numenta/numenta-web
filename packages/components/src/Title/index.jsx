// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


const Title = ({children, headline}) => {
  const isHeadline = headline === true
  const className = isHeadline ? styles.headline : styles.title

  return (
    <h1 className={className}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: React.PropTypes.node.isRequired,
  headline: React.PropTypes.bool.isRequired,
}

Title.defaultProps = {
  headline: false,
}

export default Title
