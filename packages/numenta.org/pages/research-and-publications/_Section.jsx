// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Image from 'numenta-web-shared-components/lib/Image'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Quote from 'numenta-web-shared-components/lib/Quote'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import ImageResearch from './images/image.png'
import styles from './index.css'


/**
 * Research & Publications MainSection - React view component.
 */
const SectionResearch = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="HTM Research Event"
            border={true}
            respond="mw"
            shadow={true}
            src={ImageResearch}
          />
        </div>
        <div className={styles.content}>
          <Quote citation="Jeff Hawkins">
            Numenta’s unique approach of focusing on large-scale cortical
            theory and simulation drives us to tackle one of humanity’s
            greatest scientific challenges: reverse-engineering the
            neocortex.
          </Quote>
          <Paragraph lead={true}>
            Numenta’s team of researchers focuses on developing a comprehensive
            theory of the neocortex – what it does and how its architecture
            implements this. We test our theories via simulation, mathematical
            analysis and collaborative partnerships with experimental
            laboratories, and we document our research in two primary forms: a
            living book called {' '}
            <TextLink to={links.out.bami}>
              BAMI (Biological and Machine Intelligence),
            </TextLink> {' '}
            and {' '}
            <TextLink to={links.in.papers}>
              scientific publications,
            </TextLink> {' '}
            which include peer-reviewed journal papers and self-archived
            scientific manuscripts.
          </Paragraph>
        </div>
      </div>
    </article>
  )
}

SectionResearch.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionResearch
