// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


/**
 *
 */
const FormCheckbox = ({name, onClick}) => (
  <input
    className={styles.checkbox}
    id={name}
    name={name}
    onClick={onClick}
    type="checkbox"
  />
)

FormCheckbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
}

export default FormCheckbox
