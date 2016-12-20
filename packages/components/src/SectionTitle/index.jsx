// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import IconAngleDown from 'react-icons/lib/fa/angle-down'
import IconAngleUp from 'react-icons/lib/fa/angle-up'
import React from 'react'

import Title from '../Title'

import styles from './index.css'


const SectionTitle = ({children, clickHandle, headline, open, title}) => {
  const isHeadline = headline === true
  const isOpen = open === true && !isHeadline
  const IconAngle = isOpen ? IconAngleUp : IconAngleDown
  const titleClasses = [styles.title]
  let sectionTitle = (
    <Title headline={headline}>
      {children}
    </Title>
  )

  if (!isHeadline) {
    if (isOpen) titleClasses.push(styles.open)

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    sectionTitle = (
      <nav
        className={classNames(...titleClasses)}
        onClick={clickHandle}
        title={title}
      >
        <IconAngle className={styles.toggle} />
        {sectionTitle}
      </nav>
    )
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }

  return sectionTitle
}

SectionTitle.propTypes = {
  children: React.PropTypes.node.isRequired,
  clickHandle: React.PropTypes.func.isRequired,
  headline: React.PropTypes.bool.isRequired,
  open: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string,
}

SectionTitle.defaultProps = {
  headline: false,
  open: false,
}

export default SectionTitle
