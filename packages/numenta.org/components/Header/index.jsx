// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import IconSearch from 'react-icons/lib/fa/search'
import React from 'react'

import Search from 'numenta-web-shared-components/lib/Search'

import styles from './index.css'


/**
 * Site Static Header UI Bar - React view component.
 */
const Header = ({logo}) => (
  <div className={styles.appbar}>
    <header className={styles.header}>
      <div className={styles.logo}>
        {logo}
      </div>
      <div className={styles.search}>
        <Search icon={<IconSearch color="white" />} />
      </div>
    </header>
  </div>
)

Header.propTypes = {
  logo: React.PropTypes.element.isRequired,
}

export default Header
