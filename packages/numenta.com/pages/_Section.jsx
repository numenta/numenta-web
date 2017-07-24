// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import DefineItem from 'numenta-web-shared-components/lib/DefineItem'
import DefineTitle from 'numenta-web-shared-components/lib/DefineTitle'
import Glance from 'numenta-web-shared-components/lib/Glance'
import Logo from 'numenta-web-shared-components/lib/Logo'
import MarkdownBody from 'numenta-web-shared-components/lib/MarkdownBody'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import Tag from 'numenta-web-shared-components/lib/Tag'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import ContentLeft from './_content/_left.md'

import styles from './index.css'


/**
 * Home MainSection and Homepage Content - React view component.
 */
const SectionHome = (props, {config}) => {
  const {links} = config

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>

        <Glance
          head={
            <div className={styles.glanceHead}><Logo /></div>
          }
        >
          <DefineTitle>
            About
          </DefineTitle>
          <DefineItem>
            Developing a neocortical theory for biological and machine
            intelligence
          </DefineItem>

          <DefineTitle>
            Established
          </DefineTitle>
          <DefineItem>
            Feb 4, 2005
            <Spacer />
            Redwood City, CA
          </DefineItem>

          <DefineTitle>
            Employees
          </DefineTitle>
          <DefineItem>
            15 — 20
          </DefineItem>

          <DefineTitle>
            Business
          </DefineTitle>
          <DefineItem>
            <TextLink to="/assets/pdf/apps/licensing-guide.pdf">
              Licensing
            </TextLink>
          </DefineItem>

          <DefineTitle>
            Content
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.blog}>Blog</TextLink>
            <Spacer />
            <TextLink to={links.in.newsletter}>Newsletter</TextLink>
          </DefineItem>

          <DefineTitle>
            Press
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.press}>
              Releases
            </TextLink>
            <Spacer />
            <TextLink to={`${links.in.press}#links`}>
              Links
            </TextLink>
          </DefineItem>

          <DefineTitle>
            Events
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.events}>Events</TextLink>
          </DefineItem>

          <DefineTitle>
            Latest
          </DefineTitle>
          <DefineItem>
            {/* eslint-disable max-len */}
            <TextLink to="http://www.biorxiv.org/content/early/2017/07/12/162263">
              HTM Sensorimotor Theory paper <br /> and video now on bioRxiv
              {' '} <Tag>New</Tag>
            </TextLink>
            {/* eslint-enable max-len */}
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
