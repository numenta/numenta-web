// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import {getVideoIdFromUrl} from 'numenta-web-shared-utils/lib/shared'
import Image from 'numenta-web-shared-components/lib/Image'
import ImageLink from 'numenta-web-shared-components/lib/ImageLink'
import PostListItem from 'numenta-web-shared-components/lib/PostListItem'
import Video from 'numenta-web-shared-components/lib/Video'

import styles from './index.css'


/**
 *
 */
const PostListRow = ({post}) => {
  const {data, path} = post
  const target = (data.type === 'link') ? data.link : path
  let media = (  // media image (default)
    <ImageLink to={target}>
      <Image
        alt={data.title}
        border={true}
        respond="mw"
        shadow={true}
        src={`${path}${data.image}`}
      />
    </ImageLink>
  )

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

  return (
    <article className={styles.row}>
      <div className={styles.columns}>
        <div className={styles.aside}>
          {media}
        </div>
        <div className={styles.content}>
          <PostListItem post={post} />
        </div>
      </div>
    </article>
  )
}

PostListRow.propTypes = {
  post: React.PropTypes.object.isRequired,
}

export default PostListRow
