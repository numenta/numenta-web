// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import IconFacebook from 'react-icons/lib/fa/facebook'
import IconLinkedIn from 'react-icons/lib/fa/linkedin'
import IconTwitter from 'react-icons/lib/fa/twitter'
import IconYouTube from 'react-icons/lib/fa/youtube'
import React from 'react'

import ImageLink from '../ImageLink'

import styles from './index.css'


const SocialMedia = (props, {config}) => {
  const {links} = config
  const sites = {
    [links.out.facebook]: IconFacebook,
    [links.out.twitter]: IconTwitter,
    [links.out.youtube]: IconYouTube,
    [links.out.linkedin]: IconLinkedIn,
  }
  const socials = []

  for (const site in sites) {
    if ({}.hasOwnProperty.call(sites, site)) {
      const Component = sites[site]
      const titles = site.match(/(\w+)\.com/)
      let title

      if (titles && titles.length > 0) {
        title = titles.pop()

        socials.push(
          <span className={styles.spread} key={title}>
            <ImageLink title={title} to={site}>
              <Component color="inherit" />
            </ImageLink>
          </span>
        )
      }
    }
  }

  return (
    <div className={styles.social}>
      {socials}
    </div>
  )
}

SocialMedia.contextTypes = {
  config: React.PropTypes.object,
}

export default SocialMedia
