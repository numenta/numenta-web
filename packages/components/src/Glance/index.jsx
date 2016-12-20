// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import DefineList from '../DefineList'

import styles from './index.css'


/**
 * At-A-Glance React view component. Quick Details about the company/site.
 */
const Glance = ({children, head}) => (
  <aside className={styles.glance}>
    <div>{head}</div>
    <DefineList direction="horizontal">
      {children}
    </DefineList>
  </aside>
)

Glance.propTypes = {
  children: React.PropTypes.array.isRequired,
  head: React.PropTypes.element.isRequired,
}

export default Glance
