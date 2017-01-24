// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Image from 'numenta-web-shared-components/lib/Image'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import ImageCode from './images/image.png'
import styles from './index.css'


/**
 * Code MainSection and page content - React view component.
 */
const SectionCode = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="HTM Coding"
            border={true}
            respond="mw"
            shadow={true}
            src={ImageCode}
          />
        </div>
        <div className={styles.content}>

          <Paragraph lead={true}>
            In addition to making all of Numenta's {' '}
            <TextLink to={links.out.github}>
              production
            </TextLink> {' '}
            and {' '}
            <TextLink to="https://github.com/numenta/nupic.research">
              research
            </TextLink> {' '}
            code open source, our community
            produces and shares HTM implementations and applications, commonly
            posting their projects on {' '}
            <TextLink to={links.out.forum}>
              HTM Forum.
            </TextLink> {' '}
            Our community hosts many of these projects on the {' '}
            <TextLink to="https://github.com/htm-community">
              HTM Community
            </TextLink> {' '}
            Github organization. We have {' '}
            <TextLink to={links.in.implement}>
              HTM implementations
            </TextLink> {' '}
            in languages like Python, C++, Java, Clojure, Go, and JavaScript.
          </Paragraph>
          <Paragraph>
            We are always looking for community members that can help others
            build out HTM applications and experiments. If you are interested in
            helping or providing consulting services, please leave us a note on
            the {' '}
            <TextLink to="https://discourse.numenta.org/c/htm-hackers">
              HTM Hackers Forum
            </TextLink> {' '}
            and introduce yourself.
          </Paragraph>

        </div>
      </div>
    </article>
  )
}

SectionCode.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionCode
