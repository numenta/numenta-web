// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import DefineItem from 'numenta-web-shared-components/lib/DefineItem'
import DefineTitle from 'numenta-web-shared-components/lib/DefineTitle'
import Glance from 'numenta-web-shared-components/lib/Glance'
import Logo from 'numenta-web-shared-components/lib/Logo'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import Strong from 'numenta-web-shared-components/lib/Strong'
import Tag from 'numenta-web-shared-components/lib/Tag'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

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
            <TextLink to="/blog/2016/09/02/why-did-we-completely-change-our-website-design-the-story-behind-our-new-look/">
              Why did we overhaul our web design? The story behind our new look.
              {' '} <Tag>New</Tag>
            </TextLink>
            {/* eslint-enable max-len */}
          </DefineItem>
        </Glance>

      </div>
      <div className={styles.content}>

        <Paragraph lead={true}>
          <Strong>Numenta</Strong> is tackling one of the most
          important scientific challenges of all time: reverse engineering
          the neocortex. Studying how the brain works helps us understand
          the principles of intelligence and build machines that work on the
          same principles. We believe that understanding how the neocortex works
          is the fastest path to machine intelligence, and creating intelligent
          machines is important for the continued success of humankind.
        </Paragraph>
        <Paragraph>
          We are at the beginning of a thrilling new era of computing
          that will unfold over the coming decades, and we invite you to
          learn about how our approach is helping to advance the state of brain
          theory and machine intelligence.
        </Paragraph>
        <Paragraph>
          On this site, you’ll find information about our company. If
          you’re looking for technical resources, including details of our
          research, software implementations, and how to get started with
          our technology, visit our {' '}
          <TextLink to={links.in.opensource}>
            open source community
          </TextLink> {' '}
          at {' '}
          <TextLink to={links.out.org}>
            {links.out.org}.
          </TextLink>
        </Paragraph>

      </div>
    </article>
  )
}

SectionHome.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionHome
