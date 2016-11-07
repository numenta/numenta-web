// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import classNames from 'classnames'
import IconBook from 'react-icons/lib/fa/book'
import IconPaper from 'react-icons/lib/fa/file-pdf-o'
import IconVideo from 'react-icons/lib/fa/youtube-play'
import React from 'react'

import Anchor from '../../../components/Anchor'
import ListItem from '../../../components/ListItem'
import ListOrder from '../../../components/ListOrder'
import Paragraph from '../../../components/Paragraph'
import Spacer from '../../../components/Spacer'
import SubTitle from '../../../components/SubTitle'
import Subtle from '../../../components/Subtle'
import TextLink from '../../../components/TextLink'
import Video from '../../../components/Video'

import {sortDateDescend} from '../../../utils/shared'

import ImageVideo from './images/video.png'
import styles from './index.css'

const learnIcons = {
  book: (<IconBook />),
  paper: (<IconPaper />),
  video: (<IconVideo />),
}


/**
 * Papers Videos & More - MainSection and page content - React view component.
 */
const SectionPapers = (props, {config, route}) => {
  const {links} = config
  const {pages} = route
  const postsLearn = pages.filter(({file}) => (
    (file.path.match(/^papers-videos-and-more\/.*\.md/))
  ))
  const postsMore = postsLearn.filter(({data}) => (
    (data.media !== 'video')
  ))
  const postsVideos = postsLearn.filter(({data}) => (
    (data.media === 'video')
  ))
  const mores = postsMore.sort(sortDateDescend).map(({data, file, path}) => (
    <ListItem key={file.stem}>
      <div className={classNames(styles.columns, styles.row)}>
        <div className={styles.icon}>
          {learnIcons[data.media]}
        </div>
        <div className={styles.learn}>
          <TextLink to={path}>
            {data.title}
          </TextLink>
          <div>
            <Subtle>
              {data.author}
              <Spacer />
              {data.org}
              <Spacer />
              {data.date}
            </Subtle>
          </div>
        </div>
      </div>
    </ListItem>
  ))
  const videos = postsVideos.sort(sortDateDescend).map(({data, file, path}) => (
    <ListItem key={file.stem}>
      <div className={classNames(styles.columns, styles.row)}>
        <div className={styles.icon}>
          {learnIcons[data.media]}
        </div>
        <div className={styles.learn}>
          <TextLink to={path}>
            {data.title}
          </TextLink>
          <div>
            <Subtle>
              {data.author}
              <Spacer />
              {data.org}
              <Spacer />
              {data.date}
            </Subtle>
          </div>
        </div>
      </div>
    </ListItem>
  ))

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.video}>
            <Video
              image={ImageVideo}
              respond="mw"
              time="1:00:00"
              title="The Hard Unsolved Problems in HTM Theory"
              type="youtube"
              videoId="gXP-63sZM_o"
            />
          </div>
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            To help you learn about our theory and technology, we have organized
            educational content below. It is designed for anyone who wants to
            learn about HTM cortical theory and its applications for machine
            intelligence.
          </Paragraph>
          <ListOrder marker="disc">
            <ListItem>
              <TextLink to={links.out.papers}>
                Research Papers
              </TextLink>
              <Spacer />
              Here you’ll find a collection of recent Numenta Research papers.
              Some of them are currently under review at journals/conferences
              but we have made all manuscripts available on {' '}
              <TextLink to="http://arxiv.org">arXiv,</TextLink> {' '}
              an online repository of self-archived scientific papers.
            </ListItem>
            <ListItem>
              <TextLink to={links.in.bami}>
                Biological and Machine Intelligence (BAMI)
              </TextLink>
              <Spacer />
              This living book (Biological And Machine Intelligence) documents
              our Hierarchical Temporal Memory framework for both biological and
              machine intelligence.
            </ListItem>
            <ListItem>
              {/* eslint-disable max-len */}
              <TextLink to="https://www.youtube.com/playlist?list=PL3yXMgtrZmDqhsFQzwUC9V8MeeVOQ7eZ9">
                HTM School
              </TextLink>
              {/* eslint-enable max-len */}
              <Spacer />
              This YouTube series is designed to educate the general public
              about Hierarchical Temporal Memory (HTM). Each 10-15 minute
              episode dives into a particular topic of HTM theory.
            </ListItem>
          </ListOrder>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Anchor name="videos" />
          <SubTitle>
            Videos
          </SubTitle>
          <ListOrder>
            {videos}
          </ListOrder>
        </div>
        <div className={styles.aside}>
          <Anchor name="more" />
          <SubTitle>
            More
          </SubTitle>
          <ListOrder>
            {mores}
          </ListOrder>
        </div>
      </div>
    </article>
  )
}

SectionPapers.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default SectionPapers
