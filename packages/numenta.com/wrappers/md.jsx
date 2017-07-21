// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import capitalize from 'lodash/capitalize'
import Helmet from 'react-helmet'
import IconArrow from 'react-icons/lib/fa/caret-left'
import moment from 'moment'
import React from 'react'
import root from 'window-or-global'

import Avatar from 'numenta-web-shared-components/lib/Avatar'
import Disqus from 'numenta-web-shared-components/lib/Disqus'
import IconMarker from 'numenta-web-shared-components/lib/IconMarker'
import Image from 'numenta-web-shared-components/lib/Image'
import Markdown from 'numenta-web-shared-components/lib/Markdown'
import Section from 'numenta-web-shared-components/lib/Section'
import Sound from 'numenta-web-shared-components/lib/Sound'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import Strong from 'numenta-web-shared-components/lib/Strong'
import Subtle from 'numenta-web-shared-components/lib/Subtle'
import Table from 'numenta-web-shared-components/lib/Table'
import TableBody from 'numenta-web-shared-components/lib/TableBody'
import TableCell from 'numenta-web-shared-components/lib/TableCell'
import TableRow from 'numenta-web-shared-components/lib/TableRow'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Time from 'numenta-web-shared-components/lib/Time'
import Video from 'numenta-web-shared-components/lib/Video'
import {
  getEventTimeDisplay, getVideoIdFromUrl,
} from 'numenta-web-shared-utils/lib/universal'

import styles from './md.css'

const postTypes = [
  'blog', 'careers', 'events', 'newsletter', 'press', 'resources',
]


/**
 * Gatsby Markdown Wrapper - React view component.
 */
class MarkdownWrapper extends React.Component {

  static propTypes = {
    route: React.PropTypes.object.isRequired,
  }

  static contextTypes = {
    config: React.PropTypes.object,
  }

  state = {
    comments: null,
  }

  componentDidMount() {
    const {location} = root
    const {route} = this.props
    const {config} = this.context
    const {data, file} = route.page
    const key = file.dir.split('/')[0]

    // add clientside disqus comments below posts
    if (postTypes.indexOf(key) > -1) {
      this.setState({
        comments: (
          <Disqus
            shortname={config.company.toLowerCase()}
            title={data.title}
            url={location.href}
          />
        ),
      })
    }
  }

  render() {
    const {route} = this.props
    const {config} = this.context
    const {comments} = this.state
    const {data, file, path} = route.page
    const datetime = moment(data.date, config.moments.post)
    const occur = datetime.format(config.moments.human)
    let key = file.dir.split('/')[0]
    const url = `/${key}/`
    let author, back, date, event, media, type

    if (key === 'careers-and-team') {
      key = 'careers'
    }
    if (key === 'papers-videos-and-more') {
      key = 'resources'
    }

    if (data.type === 'post') {
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

      if (key === 'events') {
        const {what, when, where, who, why} = data.event
        const {desc, city, state, country, web} = where
        const details = [(
          <TableRow key="when">
            <TableCell>
              <Strong>When</Strong>
            </TableCell>
            <TableCell>
              {getEventTimeDisplay(when)}
            </TableCell>
          </TableRow>
        )]
        let location = city

        if (state) {
          location = `${location}, ${state}`
        }
        if (country) {
          location = `${location} ${country}`
        }

        details.push((
          <TableRow key="where">
            <TableCell>
              <Strong>Where</Strong>
            </TableCell>
            <TableCell>
              <div>{desc}</div>
              <div>
                {location}
              </div>
            </TableCell>
          </TableRow>
        ))

        if (web) {
          details.push((
            <TableRow key="web">
              <TableCell>
                <Strong>Web</Strong>
              </TableCell>
              <TableCell>
                <TextLink to={web}>Event Website</TextLink>
              </TableCell>
            </TableRow>
          ))
        }
        if (what) {
          details.push((
            <TableRow key="topic">
              <TableCell>
                <Strong>Topic</Strong>
              </TableCell>
              <TableCell>
                {what}
              </TableCell>
            </TableRow>
          ))
        }
        if (why && who) {
          details.push((
            <TableRow key="why">
              <TableCell>
                <Strong>{why}</Strong>
              </TableCell>
              <TableCell>
                {who}
              </TableCell>
            </TableRow>
          ))
        }

        event = (
          <div className={styles.event}>
            <Table direction="horizontal">
              <TableBody>
                {details}
              </TableBody>
            </Table>
          </div>
        )
      }
    }

    if (data.date) {
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
          {event}
          <div className={styles.content}>
            <Markdown>
              <div dangerouslySetInnerHTML={{__html: data.body}} />
            </Markdown>
          </div>
          {author}
          {comments}
          {back}
        </Section>
      </article>
    )
  }

}

export default MarkdownWrapper
