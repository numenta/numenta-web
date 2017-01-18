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
            Learning technology. It is a machine intelligence framework
            strictly based on neuroscience and the physiology and interaction of
            pyramidal neurons in the neocortex of the mammalian brain.
          </Paragraph>

          <Paragraph>
            If you’re interested in learning more about HTM, visit our
            educational series {' '}
            <TextLink to={links.in.school}>
              HTM School
            </TextLink> {' '}
            or browse through the topics on {' '}
            <TextLink to={links.out.forum}>
              HTM Forum
            </TextLink>
            . You can also find a collection of research papers at {' '}
            <TextLink to={links.out.papers}>
              numenta.com/papers
            </TextLink> {' '}
            and a living book authored by Numenta researchers and engineers that
            documents HTM called {' '}
            <TextLink to={links.out.bami}>
              Biological and Machine Intelligence (BAMI)
            </TextLink>
            .
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
