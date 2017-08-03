// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import MarkdownBody from 'numenta-web-shared-components/lib/MarkdownBody'
import MarkdownMedia from 'numenta-web-shared-components/lib/MarkdownMedia'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import React from 'react'

import ContentGeospatialLeft from './_content/_geospatial_left.md'
import ContentGeospatialRight from './_content/_geospatial_right.md'
import ContentGrokLeft from './_content/_grok_left.md'
import ContentGrokRight from './_content/_grok_right.md'
import ContentHtmStocksLeft from './_content/_htmstocks_left.md'
import ContentHtmStocksRight from './_content/_htmstocks_right.md'
import ContentHtmStudioLeft from './_content/_htmstudio_left.md'
import ContentHtmStudioRight from './_content/_htmstudio_right.md'
import ContentIntroLeft from './_content/_intro_left.md'
import ContentIntroRight from './_content/_intro_right.md'
import ContentNlpLeft from './_content/_nlp_left.md'
import ContentNlpRight from './_content/_nlp_right.md'
import ContentRogueLeft from './_content/_rogue_left.md'
import ContentRogueRight from './_content/_rogue_right.md'
import styles from './index.css'


/**
 * Applications MainSection and page content - React view component.
 */
const SectionApplications = () => (
  <article>
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={ContentIntroRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={ContentIntroLeft} />
      </div>
    </div>

    <Anchor name="htmstudio" />
    <SubTitle>{ContentHtmStudioLeft.title}</SubTitle>
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={ContentHtmStudioRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={ContentHtmStudioLeft} />
      </div>
    </div>

    <Anchor name="rogue" />
    <SubTitle>{ContentRogueLeft.title}</SubTitle>
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={ContentRogueRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={ContentRogueLeft} />
      </div>
    </div>

    <Anchor name="geo" />
    <SubTitle>{ContentGeospatialLeft.title}</SubTitle>
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={ContentGeospatialRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={ContentGeospatialLeft} />
      </div>
    </div>

    <Anchor name="htmstocks" />
    <SubTitle>{ContentHtmStocksLeft.title}</SubTitle>
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={ContentHtmStocksRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={ContentHtmStocksLeft} />
      </div>
    </div>

    <Anchor name="grokit" />
    <SubTitle>{ContentGrokLeft.title}</SubTitle>
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={ContentGrokRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={ContentGrokLeft} />
      </div>
    </div>

    <Anchor name="nlp" />
    <SubTitle>{ContentNlpLeft.title}</SubTitle>
    <div className={styles.columns}>
      <div className={styles.aside}>
        <MarkdownMedia markdown={ContentNlpRight} />
      </div>
      <div className={styles.content}>
        <MarkdownBody markdown={ContentNlpLeft} />
      </div>
    </div>
  </article>
)

export default SectionApplications
