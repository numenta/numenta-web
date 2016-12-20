// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


const FormLabel = ({children, htmlFor}) => (
  <label className={styles.formLabel} htmlFor={htmlFor}>
    {children}
  </label>
)

FormLabel.propTypes = {
  children: React.PropTypes.node.isRequired,
  htmlFor: React.PropTypes.string,
}

export default FormLabel
