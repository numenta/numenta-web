// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import capitalize from 'lodash/capitalize'
import Helmet from 'react-helmet'
import IconArrow from 'react-icons/lib/fa/caret-left'
import moment from 'moment'
import React from 'react'

import Avatar from 'numenta-web-shared-components/lib/Avatar'
import IconMarker from 'numenta-web-shared-components/lib/IconMarker'
import Image from 'numenta-web-shared-components/lib/Image'
import Markdown from 'numenta-web-shared-components/lib/Markdown'
import Section from 'numenta-web-shared-components/lib/Section'
import Sound from 'numenta-web-shared-components/lib/Sound'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import Subtle from 'numenta-web-shared-components/lib/Subtle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Time from 'numenta-web-shared-components/lib/Time'
import Video from 'numenta-web-shared-components/lib/Video'
import {getVideoIdFromUrl} from 'numenta-web-shared-utils/lib/universal'

import styles from './md.css'

const postTypes = ['blog', 'papers']


/**
 * Markdown file wrapper - React view component.
 */
const MarkdownWrapper = ({route}, {config}) => {
  const {data, file, path} = route.page
  const datetime = moment(data.date, config.moments.post)
  const occur = datetime.format(config.moments.human)
  const key = file.dir.split('/')[0]
  const url = `/${key}/`
  let author, back, date, media, type

  if (data.type === 'post') {
    if (key !== 'papers') {
      author = (
        <div className={styles.author}>
          <Subtle>
            <Avatar name={data.author} />
            {data.author}
            <Spacer />
            {data.org}
          </Subtle>
        </div>
      )
    }

    if (postTypes.indexOf(key) > -1) {
      type = (
        <span>
          <Spacer />
          <TextLink to={url}>
            {capitalize(key)}
          </TextLink>
        </span>
      )
      back = (
        <div className={styles.back}>
          <IconMarker icon={<IconArrow />}>
            <TextLink to={url}>
              All {capitalize(key)} Posts
            </TextLink>
          </IconMarker>
        </div>
      )
    }
  }

  if (data.date && key !== 'papers') {
    date = (
      <div className={styles.date}>
        <Time moment={datetime}>{occur}</Time>
        {type}
      </div>
    )
  }

  if (data.image && !data.hideImage) {
    if (data.video) {
      // media video
      media = (
        <Video
          border={true}
          image={`${path}${data.image}`}
          respond="mw"
          shadow={true}
          title={data.title}
          type="youtube"
          videoId={getVideoIdFromUrl(data.video)}
        />
      )
    }
    else if (data.sound) {
      // media sound
      media = (
        <Sound
          border={true}
          image={`${path}${data.image}`}
          respond="mw"
          shadow={true}
          title={data.title}
          type="soundcloud"
          url={data.sound}
        />
      )
    }
    else {
      // media image
      media = (
        <Image
          alt={data.title}
          border={true}
          respond="mw"
          shadow={true}
          src={`${path}${data.image}`}
        />
      )
    }

    media = (
      <div className={styles.media}>{media}</div>
    )
  }

  return (
    <article className={styles.md}>
      <Helmet title={data.title} />
      {date}
      <Section
        headline={true}
        open={true}
        title={data.title}
      >
        {author}
        {media}
        <div className={styles.content}>
          <Markdown>
            <div dangerouslySetInnerHTML={{__html: data.body}} />
          </Markdown>
        </div>
        {author}
        {back}
      </Section>
    </article>
  )
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

MarkdownWrapper.contextTypes = {
  config: React.PropTypes.object,
}

export default MarkdownWrapper
