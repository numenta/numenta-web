// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import MarkdownBody from 'numenta-web-shared-components/lib/MarkdownBody'
import MarkdownMedia from 'numenta-web-shared-components/lib/MarkdownMedia'
import React from 'react'

import ContentLeft from './_content/_left.md'
import ContentRight from './_content/_right.md'

import styles from './index.css'


/**
 * Machine Intelligence Technology - main Section/Page React view component.
 */
const SectionTechnology = () => (
  <article className={styles.columns}>
    <div className={styles.aside}>
      <MarkdownMedia markdown={ContentRight} />
    </div>
    <article className={styles.content}>
      <MarkdownBody markdown={ContentLeft} />
    </article>
  </article>
)

export default SectionTechnology
