// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Image from '../Image'

import LogoFile from './images/mark.svg'
import styles from './index.css'


/**
 * Numenta Logo Mark - React view component.
 */
const LogoMark = () => (
  <Image
    alt="Numenta Logo Mark"
    className={styles.mark}
    shadow={false}
    src={LogoFile}
    title="Numenta"
  />
)

export default LogoMark
