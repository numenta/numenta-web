// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import DefineItem from 'numenta-web-shared-components/lib/DefineItem'
import DefineTitle from 'numenta-web-shared-components/lib/DefineTitle'
import Glance from 'numenta-web-shared-components/lib/Glance'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Strong from 'numenta-web-shared-components/lib/Strong'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'

import styles from './index.css'


/**
 * Numenta.org MainSection Homepage wrapper - React view component.
 */
const SectionHome = (props, {config}) => {
  const {links, siteTitle} = config

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>

        <Glance
          head={
            <div className={styles.glanceHead}>
              {siteTitle}
            </div>
          }
        >
          <DefineTitle>
            About
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.htm}>HTM</TextLink> {' '}
            is a biologically-constrained theory of intelligence based on years
            of research in theoretical neuroscience.
          </DefineItem>

          <DefineTitle>
            Discussion
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.out.forum}>
              HTM Forum
            </TextLink>
          </DefineItem>

          <DefineTitle>
            Research Papers
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.papers}>
              Collection
            </TextLink>
          </DefineItem>

          <DefineTitle>
            Open Source
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.out.github}>
              GitHub
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
            Videos
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.out.youtube}>
              YouTube
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
        </Glance>

      </div>
      <div className={styles.content}>

        <Paragraph lead={true}>
          Welcome to <Strong>Numenta.org</Strong>, home of Numenta’s HTM
          community and open source project. If you want to learn about
          Numenta the company visit {' '}
          <TextLink to={links.out.com}>
            Numenta.com
          </TextLink> {' '}.
        </Paragraph>

        <SubTitle>
          Machine Intelligence Starts Here
        </SubTitle>

        <Paragraph>
          <Strong>Hierarchical Temporal Memory</Strong> is a foundational
          technology for the future of machine intelligence. Numenta wants to
          make this technology accessible to everyone, so all HTM software and
          on-going research is open source. Anyone can learn about HTM Theory,
          then inspect the software and see exactly how it is implemented.
          Community members have written their own versions of HTM systems in
          other languages and platforms. Some have created detailed
          visualizations, experiments, and applications.
        </Paragraph>

        <SubTitle>
          Join us!
        </SubTitle>

        <Paragraph>
          Come discuss HTM theory with us {' '}
          <TextLink to={links.out.forum}>
            on our forums
          </TextLink> {' '}
          , or share your HTM application on our {' '}
          <TextLink to={links.out.github}>
            Github organization
          </TextLink> {' '}
          . If you're new to HTM, you'll learn a lot in {' '}
          <TextLink to={links.out.school}>
            HTM School
          </TextLink> {' '}
          . The neocortex is a logical system that we'll understand fully in
          time. HTM theory reflects our current understanding of how the
          neocortex works, and HTM code reduces that theory to practice. HTM
          is continually being updated as we learn more about the brain. We
          believe HTM will play a critical role in the creation of truly
          intelligent machines. Join our community and help us discover the
          future of machine intelligence.
        </Paragraph>

      </div>
    </article>
  )
}

SectionHome.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionHome
