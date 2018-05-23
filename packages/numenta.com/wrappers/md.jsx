// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import startCase from 'lodash/startCase'
import Helmet from 'react-helmet'
import moment from 'moment'
import React from 'react'
import {getMetadataTags} from 'numenta-web-shared-utils/lib/client'

import Avatar from 'numenta-web-shared-components/lib/Avatar'
import Disqus from 'numenta-web-shared-components/lib/Disqus'
import Image from 'numenta-web-shared-components/lib/Image'
import ImageLink from 'numenta-web-shared-components/lib/ImageLink'
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
    const {route} = this.props
    const {config} = this.context
    const {links} = config
    const {data, path} = route.page
    const url = Object.values(links.in)
                      .filter((p) => p.length > 1 && path.startsWith(p))[0]


    // add clientside disqus comments below posts
    const postTypes = [
      links.in.blog,
      links.in.careers,
      links.in.events,
      links.in.newsletter,
      links.in.press,
      links.in.resources,
      links.in.papers,
    ]
    if (postTypes.indexOf(url) > -1) {
      this.setState({
        comments: (
          <Disqus
            shortname={config.company.toLowerCase()}
            title={data.title}
            url={`${config.baseUrl}${path}`}
          />
        ),
      })
    }
  }

  render() {
    const {route} = this.props
    const {config} = this.context
    const {links} = config
    const {comments} = this.state
    const {data, path} = route.page
    const datetime = moment(data.date, config.moments.post)
    const occur = datetime.format(config.moments.human)
    let url = Object.values(links.in)
                      .filter((p) => p.length > 1 && path.startsWith(p))[0]
    let author, back, event, media, header, parent, breadcrumb, scripts
    let description = data.description

    // Fix breadcrumb text
    if (url === links.in.htmstudio) {
      parent = 'HTM Studio'
    }
    else if (url === links.in.bami) {
      parent = 'BAMI'
    }
    else if (url === links.in.papersvideos) {
      parent = 'Papers, Videos and More'
    }
    else if (url) {
      const labels = url.split('/')
      let label = labels.pop()
      while (label.length === 0) {
        label = labels.pop()
      }
      parent = startCase(label)
    }
    else {
      parent = 'Home'
      url = '/'
    }
    const legal = [
      links.in.terms,
      links.in.privacy,
    ]
    if (legal.indexOf(url) === -1) {
      // FIXME Waiting for new folder structure
      breadcrumb = (
        <span>
          <TextLink to={url}>
            {parent}
          </TextLink>
        </span>
      )
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

      if ('event' in data) {
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

        if (!description) {
          description = `${what}, ${getEventTimeDisplay(when)}`
          if (desc) {
            description += `, ${desc}`
          }
          if (location) {
            description += `, ${location}`
          }
        }

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
      let space
      if (breadcrumb) {
        space = (<Spacer />)
      }
      header = (
        <div className={styles.date}>
          <Time moment={datetime}>{occur}</Time>
          {space}
          {breadcrumb}
        </div>
      )
    }
    else {
      header = breadcrumb
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

      if (data.media && data.media === 'poster') {
        author = null
        media = (
          <div className={styles.poster}>
            <ImageLink
              title="Click on the image above to enlarge"
              to={data.link}
            >
              {media}
            </ImageLink>
            <p>Click on the image above to enlarge</p>
          </div>
        )
      }
      else {
        // media image
        media = (
          <div className={styles.media}>{media}</div>
        )
      }
    }
    if ('scripts' in data) {
      scripts = data.scripts.map((src) => (<script src={src} async="true" />))
    }

    return (
      <article className={data.columns ? styles.mdCol : styles.md}>
        <Helmet title={data.title}>
          {getMetadataTags(data, config.baseUrl, {description})}
          {scripts}
        </Helmet>
        {header}
        <Section
          headline={true}
          open={true}
          title={data.header || data.title}
        >
          {author}
          {media}
          {event}
          <div className={data.dropcap === false ? '' : styles.lead}>
            <Markdown columns={data.columns || false}>
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
