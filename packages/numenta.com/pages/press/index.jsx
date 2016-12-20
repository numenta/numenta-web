// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/ListOrder'
import PostListItem from 'numenta-web-shared-components/lib/PostListItem'
import Section from 'numenta-web-shared-components/lib/Section'
import {sortDateDescend} from 'numenta-web-shared-utils/lib/shared'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import Subtle from 'numenta-web-shared-components/lib/Subtle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import styles from './index.css'


/**
 * Press Page - React view component.
 */
const PressPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (file.path.match(/^press\/.*\.md/)))
  const pressLinks = posts
    .filter(({data}) => (data.type === 'link'))
    .sort(sortDateDescend).map(({data, file}) => (
      <ListItem key={file.stem}>
        <div className={styles.link}>
          <div>
            <TextLink to={data.link}>
              {data.title}
            </TextLink>
          </div>
          <Subtle>
            {data.date}
            <Spacer />
            {data.author}
            <Spacer />
            {data.org}
          </Subtle>
        </div>
      </ListItem>
    ))
  const pressReleases = posts
    .filter(({data}) => (data.type === 'post'))
    .sort(sortDateDescend).map((post) => (
      <ListItem key={post.file.stem}>
        <div className={styles.release}>
          <PostListItem post={post} />
        </div>
      </ListItem>
    ))

  return (
    <article>
      <Helmet title="Press" />
      <Section headline={true} open={true} title="Press Releases">
        <div className={styles.columns}>
          <div className={styles.content}>
            <ListOrder copy={false}>
              {pressReleases}
            </ListOrder>
          </div>
          <div className={styles.aside}>
            <Anchor name="links" />
            <SubTitle>Press Links</SubTitle>
            <ListOrder copy={false} marker="disc">
              {pressLinks}
            </ListOrder>
          </div>
        </div>
      </Section>
    </article>
  )
}

PressPage.contextTypes = {
  route: React.PropTypes.object,
}

export default PressPage
