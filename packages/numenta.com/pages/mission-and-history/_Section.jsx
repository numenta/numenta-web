// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import Image from 'numenta-web-shared-components/lib/Image'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/ListOrder'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Strong from 'numenta-web-shared-components/lib/Strong'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Video from 'numenta-web-shared-components/lib/Video'

import ImageTimeline from './images/timeline.png'
import ImageVideoStory from './images/video-ourstory.png'
import styles from './index.css'


/**
 * Mission & History MainSection and page content - React view component.
 */
const SectionMission = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <Anchor name="mission" />
      <SubTitle>Mission</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Video
            image={ImageVideoStory}
            respond="mw"
            time="02:32"
            title="Our Story"
            type="youtube"
            videoId="f1tYXv6ST_U"
          />
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Numenta’s mission is to be a leader in the new era of machine
            intelligence.  We believe the brain is the best example of an
            intelligent system, providing a roadmap for building intelligent
            machines. The brain’s center of intelligence, the neocortex,
            controls a wide range of functions using a common set of
            principles.
          </Paragraph>
          <Paragraph>
            Because today’s computers are programmed, they can only do
            exactly as they are told. In stark contrast, intelligent
            machines continuously and automatically learn patterns in their
            environment without being programmed, enabling them to tackle
            problems in entirely new ways. Intelligent machines that learn will
            have an enormous beneficial impact in the coming decades.
          </Paragraph>
          <Paragraph>
            We have made significant progress in understanding the neocortex
            and building software based on those principles. We put all of our
            research and software implementations into open source and encourage
            others to join us in building a community. From a commercial point
            of view, we {' '}
            <TextLink to={links.out.license}>
              license our technology and intellectual property.
            </TextLink>
          </Paragraph>
        </div>
      </div>

      <Anchor name="history" />
      <SubTitle>History</SubTitle>
      <Image
        alt="Numenta Historical Timeline"
        respond="mw"
        shadow={false}
        src={ImageTimeline}
      />
      <Paragraph>
        Numenta was established in 2005 in Redwood City, CA.  Our progress
        can be categorized by three distinct phases:
      </Paragraph>
      <ListOrder marker="decimal">
        <ListItem>
          <Strong>
            Testing the HTM theory and developing first generation
            algorithms.
          </Strong> {' '}
          During this phase, vision was a main application focus area.
        </ListItem>
        <ListItem>
          <Strong>
            Developing a second generation of HTM Learning algorithms with
            stronger biological correlation and a roadmap for future work.
          </Strong> {' '}
          During this phase, we continued to explore applications, built a
          prediction engine, and started our open source project.
        </ListItem>
        <ListItem>
          <Strong>
            Researching the third generation of HTM Learning algorithms.
          </Strong> {' '}
          We are currently focusing on sensorimotor integration.
        </ListItem>
      </ListOrder>
    </article>
  )
}

SectionMission.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionMission
