// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import DefineItem from 'numenta-web-shared-components/lib/DefineItem'
import DefineTitle from 'numenta-web-shared-components/lib/DefineTitle'
import Glance from 'numenta-web-shared-components/lib/Glance'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Strong from 'numenta-web-shared-components/lib/Strong'
import Image from 'numenta-web-shared-components/lib/Image'
import ImageLink from 'numenta-web-shared-components/lib/ImageLink'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'

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

        <Paragraph lead={true}>
          Welcome to <Strong>Numenta.org</Strong>, home of Numenta’s HTM
          community and open source projects. If you want to learn about
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
          technology for the future of machine intelligence based upon the
          biology of the neocortex. Because Numenta is committed to making this
          technology accessible to everyone, all HTM software and
          ongoing research is open source. This allows you to work with our
          technology in whatever way works best for you ‒ learn about the
          theory, dive into the source code, or start your own implementation.
          Some of our community members have written their own versions of HTM
          systems in other languages and platforms. Others have created detailed
          visualizations, experiments, and applications.
        </Paragraph>

        <Paragraph>
          The neocortex is a logical system that we'll understand fully in
          time. HTM theory reflects our current understanding of how the
          neocortex works, and HTM code reduces that theory to practice. HTM
          is continually being updated as we learn more about the brain. We
          believe HTM will play a critical role in the creation of truly
          intelligent machines.
        </Paragraph>

        <SubTitle>
          Join us!
        </SubTitle>

        <Paragraph>
          There are many ways for you to get involved. Come discuss HTM theory
          with us {' '}
          <TextLink to={links.out.forum}>
            on our forums
          </TextLink> {' '}
          , or share your HTM application on our {' '}
          <TextLink to={links.out.github}>
            Github organization
          </TextLink> {' '}
          . If you're new to HTM, a great place to learn is in {' '}
          <TextLink to={links.in.school}>
            HTM School
          </TextLink> {' '}
          . We hope
          you’ll join our community and help us discover the future of machine
          intelligence.
        </Paragraph>

      </div>
    </article>
  )
}

SectionHome.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionHome
