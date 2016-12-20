// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import moment from 'moment'
import React from 'react'

import LogoMark from '../LogoMark'
import Spacer from '../Spacer'
import TextLink from '../TextLink'

import styles from './index.css'


/**
 * Site Footer - React view component.
 */
const Footer = (props, {config, manifest}) => {
  const {company, links} = config
  const {repository} = manifest
  const year = moment().year()

  return (
    <div className={styles.footbar}>
      <footer className={styles.footer}>
        <span>
          © {year} {' '}
          <TextLink to={links.in.home}>{company}</TextLink>
        </span>
        <span className={styles.mark}>
          <LogoMark />
        </span>
        <span>
          <TextLink to={links.in.terms}>Terms</TextLink>
          <Spacer />
          <TextLink to={links.in.privacy}>Privacy</TextLink>
          <Spacer />
          <TextLink to={links.in.sitemap}>Sitemap</TextLink>
          <Spacer />
          <TextLink to={repository.url}>Source</TextLink>
        </span>
      </footer>
    </div>
  )
}

Footer.contextTypes = {
  config: React.PropTypes.object.isRequired,
  manifest: React.PropTypes.object.isRequired,
}

export default Footer
