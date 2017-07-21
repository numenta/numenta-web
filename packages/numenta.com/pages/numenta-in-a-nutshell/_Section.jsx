// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Markdown from 'numenta-web-shared-components/lib/Markdown'
import MarkdownMedia from 'numenta-web-shared-components/lib/MarkdownMedia'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'

// TODO: subdir for content? then change image url?
import ContentLeft from './left.md'
import ContentRight from './right.md'

import styles from './index.css'


/**
 * Numenta in a Nutshell MainSection and page content - React
 *  view component.
 */
const SectionNutshell = () => {
  const left = ContentLeft
  let leftTitle
  if (left.title) {
    leftTitle = (<SubTitle>{left.title}</SubTitle>)
  }

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={ContentRight} />
      </div>
      <div className={styles.content}>
        <Markdown>
          {leftTitle}
          <div dangerouslySetInnerHTML={{__html: left.body}} />
        </Markdown>
      </div>
    </article>
  )
}

export default SectionNutshell
