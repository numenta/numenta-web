// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import DefineItem from 'numenta-web-shared-components/lib/DefineItem'
import DefineTitle from 'numenta-web-shared-components/lib/DefineTitle'
import Glance from 'numenta-web-shared-components/lib/Glance'
import MarkdownBody from 'numenta-web-shared-components/lib/MarkdownBody'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Image from 'numenta-web-shared-components/lib/Image'
import ImageLink from 'numenta-web-shared-components/lib/ImageLink'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import ContentLeft from './_content/_left.md'

import styles from './index.css'


/**
 * Numenta.org MainSection Homepage wrapper - React view component.
 */
const SectionHome = (props, {config}) => {
  const {links} = config

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>

        <Glance
          head={
            <div className={styles.glanceHead}>
              Community Resources
            </div>
          }
        >
          <DefineTitle>
            Discussion
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.out.forum}>HTM Forum</TextLink> {' '}
          </DefineItem>

          <DefineTitle>
            Code
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.out.github}>
              Numenta Github
            </TextLink>
            <br />
            <TextLink to={links.out.communityGithub}>
              HTM Community Github
            </TextLink>
          </DefineItem>

          <DefineTitle>
            Videos
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.out.youtube}>
              YouTube
            </TextLink>
          </DefineItem>

          <DefineTitle>
            Technical
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.out.papers}>
              Papers
            </TextLink>
          </DefineItem>

          <DefineTitle>
            License
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.license}>
              AGPLv3
            </TextLink>
          </DefineItem>


          <DefineTitle>
            Events
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.out.meetup}>
              Meetup
            </TextLink>
          </DefineItem>

          <DefineTitle>
            Blog
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.blog}>
              Blog
            </TextLink>
          </DefineItem>

          <DefineTitle>
            HTM School
          </DefineTitle>
          <DefineItem>
            <Paragraph>
              See the latest episode below!
            </Paragraph>

            <div className={styles.noLinkIcon}>

              <ImageLink to={links.out.latestSchool}>
                <Image
                  alt="Latest HTM School Episode"
                  border={true}
                  respond="mw"
                  src={links.out.latestSchoolThumb}
                />
              </ImageLink>

            </div>

          </DefineItem>

        </Glance>

      </div>
      <div className={styles.content}>

        <MarkdownBody markdown={ContentLeft} />

      </div>
    </article>
  )
}

SectionHome.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionHome
