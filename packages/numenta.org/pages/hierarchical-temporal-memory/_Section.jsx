// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Image from 'numenta-web-shared-components/lib/Image'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import ImageHtm from './images/image.png'
import styles from './index.css'


/**
 * Hierarchical Temporal Memory (HTM) MainSection and page - React view
 *  component.
 */
const SectionHtm = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="HTM Image"
            border={true}
            respond="mw"
            shadow={true}
            src={ImageHtm}
          />
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Hierarchical Temporal Memory (HTM) is a biologically-constrained
            theory of intelligence originally described in the book {' '}
            <em>On Intelligence</em>. HTM is not a Deep Learning or Machine
            Learning technology. HTM is a machine intelligence framework
            strictly based on neuroscience and the physiology and interaction of
            pyramidal neurons in the neocortex of the mammalian brain.
          </Paragraph>
          <Paragraph>
            For detailed information — including educational videos, papers,
            and community discussions — regarding HTM, please see our {' '}
            <TextLink to={links.out.school}>
              HTM School.
            </TextLink>
          </Paragraph>
          <Paragraph>
            To get an idea of how HTM theory originated, you can read about the
            created of the Redwood Neuroscience center and Numenta at {' '}
            <TextLink to={links.in.history}>
              HTM History.
            </TextLink>
          </Paragraph>
          <Paragraph>
            To get involved in our community, join {' '}
            <TextLink to={links.out.forum}>
              HTM Forum.
            </TextLink>
          </Paragraph>
        </div>
      </div>
    </article>
  )
}

SectionHtm.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionHtm
