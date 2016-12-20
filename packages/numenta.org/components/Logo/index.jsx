// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Image from 'numenta-web-shared-components/lib/Image'

import logoFile from './images/numenta.svg'
import styles from './index.css'


const Logo = () => (
  <Image
    alt="Numenta Logo"
    className={styles.logo}
    shadow={false}
    src={logoFile}
    title="Numenta"
  />
)

export default Logo
