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
          Welcome to <Strong>Numenta.org,</Strong> an open platform and
          community dedicated to advancing the state of brain theory and machine
          intelligence.  On this site, you will find the technical resources you
          need to get started with Hierarchical Temporal Memory (HTM). HTM is
          a theory of the neocortex developed by {' '}
          <TextLink to={links.out.com}>
            Numenta
          </TextLink> {' '}
          that provides a framework for both biological and machine
          intelligence. Parts of HTM theory have been implemented, tested, and
          used in applications, and other parts are still being developed.
        </Paragraph>
        <Paragraph>
          Because Numenta believes in making our work open and accessible, we
          offer several ways to join us as we continue to progress the theory.
          Experiment with our open source project {' '}
          <TextLink to={links.in.code}>
            NuPIC (Numenta Platform for Intelligent Computing),
          </TextLink> {' '}
          learn about HTM through our collection of {' '}
          <TextLink to={links.in.papers}>
            scientific publications
          </TextLink> {' '}
          and {' '}
          <TextLink to={links.in.school}>
            educational videos,
          </TextLink> {' '}
          and {' '}
          <TextLink to={links.in.community}>
            join our open source community.
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
