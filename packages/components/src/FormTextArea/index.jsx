// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


const FormTextArea = ({children, name, placeholder}) => (
  <textarea
    className={styles.formTextArea}
    id={name}
    name={name}
    placeholder={placeholder}
  >
    {children}
  </textarea>
)

FormTextArea.propTypes = {
  children: React.PropTypes.node,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
}

export default FormTextArea
