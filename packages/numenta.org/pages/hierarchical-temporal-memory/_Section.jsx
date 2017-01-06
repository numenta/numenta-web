// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Image from 'numenta-web-shared-components/lib/Image'
import Markdown from 'numenta-web-shared-components/lib/Markdown'

import ContentHtm from './content/_htm.md'
import ImageHtm from './images/image.png'
import styles from './index.css'


/**
 * Hierarchical Temporal Memory (HTM) MainSection and page - React view
 *  component.
 */
const SectionHtm = () => (
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
        <Markdown>
          <div dangerouslySetInnerHTML={{__html: ContentHtm.body}} />
        </Markdown>
      </div>
    </div>
  </article>
)

export default SectionHtm
