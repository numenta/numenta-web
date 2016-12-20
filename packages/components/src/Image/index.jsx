// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import {prefixLink} from 'gatsby-helpers'
import React from 'react'

import styles from './index.css'


const Image = (props) => {
  const {
    alt, border, center, onClick, respond, round, shadow, src, title,
  } = props
  const classes = [styles.image]
  const prefix = prefixLink('')
  let source = src

  if (prefix && source && (source.indexOf(prefix) === -1)) {
    source = prefixLink(source)
  }

  if (border) classes.push(styles.border)
  if (center) classes.push(styles.center)
  if (respond) classes.push(styles[respond])
  if (round) classes.push(styles.round)
  if (shadow) classes.push(styles.shadow)

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <img
      alt={alt}
      className={classNames(...classes)}
      onClick={onClick}
      src={source}
      title={title}
    />
  )
  /* eslint-enable jsx-a11y/no-static-element-interactions */
}

Image.propTypes = {
  alt: React.PropTypes.string.isRequired,
  border: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  center: React.PropTypes.bool,
  respond: React.PropTypes.oneOf(['mw', 'w']),
  round: React.PropTypes.bool,
  shadow: React.PropTypes.bool,
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
}

Image.defaultProps = {
  border: false,
  center: false,
  round: false,
  shadow: true,
}

export default Image
