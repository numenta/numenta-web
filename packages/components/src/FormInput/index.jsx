// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const FormInput = ({name, onChange, placeholder, stretch, type, value}) => {
  const classes = [styles.formInput]

  if (stretch) classes.push(styles[stretch])

  return (
    <input
      className={classNames(...classes)}
      id={name}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}

FormInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  stretch: React.PropTypes.oneOf(['small', 'medium', 'large']),
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
}

FormInput.defaultProps = {
  stretch: 'large',
}

export default FormInput
