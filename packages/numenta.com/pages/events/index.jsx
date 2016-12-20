// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import moment from 'moment'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/List'
import Section from 'numenta-web-shared-components/lib/Section'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import {
  sortDateAscend, sortDateDescend,
} from 'numenta-web-shared-utils/lib/shared'

import PostListRow from '../../components/PostListRow'
import styles from './index.css'

const title = 'Events'


/**
 * Events page - React view component.
 */
const EventsPage = (props, {config, route}) => {
  const {pages} = route
  const now = moment()
  const posts = pages.filter(({file}) => (file.path.match(/^events\/.*\.md/)))
  const past = posts.filter(({data}) => (
    (moment(data.date, config.moments.post) < now)
  ))
  const upcoming = posts.filter(({data}) => (
    (moment(data.date, config.moments.post) >= now)
  ))
  const itemsPast = past.sort(sortDateDescend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostListRow post={post} />
    </ListItem>
  ))
  const itemsUp = upcoming.sort(sortDateAscend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostListRow post={post} />
    </ListItem>
  ))

  return (
    <article className={styles.events}>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>
        <Anchor name="upcoming" />
        <SubTitle>Upcoming Events</SubTitle>
        <ListOrder copy={false}>
          {itemsUp}
        </ListOrder>

        <Anchor name="past" />
        <SubTitle>Past Events</SubTitle>
        <ListOrder copy={false}>
          {itemsPast}
        </ListOrder>
      </Section>
    </article>
  )
}

EventsPage.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default EventsPage
