// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const Button = ({children, disabled, onClick, theme, type}) => {
  const classes = [styles.button, styles[theme]]

  if (disabled) classes.push(styles.disabled)

  return (
    <button
      className={classNames(...classes)}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  theme: React.PropTypes.oneOf(['default', 'light', 'primary', 'short']),
  type: React.PropTypes.oneOf(['button', 'menu', 'reset', 'submit']),
}

Button.defaultProps = {
  disabled: false,
  theme: 'default',
  type: 'button',
}

export default Button
