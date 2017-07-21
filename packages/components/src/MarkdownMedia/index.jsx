// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import {getVideoIdFromUrl} from 'numenta-web-shared-utils/lib/universal'
import Image from 'numenta-web-shared-components/lib/Image'
import React from 'react'
import Sound from 'numenta-web-shared-components/lib/Sound'
import Video from 'numenta-web-shared-components/lib/Video'

import styles from './index.css'


/**
 * Markdown Media item wrapper for lone Markdown images, sound, video, etc. -
 *  React view component.
 */
const MarkdownMedia = ({markdown}) => {
  const {hideImage, image, sound, title, video} = markdown
  const heading = title || 'Numenta Media'
  let media

  if (image && !hideImage) {
    if (video) {
      media = (
        <Video
          border={true}
          image={image}
          respond="mw"
          shadow={true}
          title={heading}
          type="youtube"
          videoId={getVideoIdFromUrl(video)}
        />
      )
    }
    else if (sound) {
      media = (
        <Sound
          border={true}
          image={image}
          respond="mw"
          shadow={true}
          title={heading}
          type="soundcloud"
          url={sound}
        />
      )
    }
    else {
      media = (
        <Image
          alt={heading}
          border={true}
          respond="mw"
          shadow={true}
          src={image}
        />
      )
    }
  }

  return (
    <div className={styles.markdownMedia}>
      {media}
    </div>
  )
}

MarkdownMedia.propTypes = {
  markdown: React.PropTypes.object.isRequired,
}

export default MarkdownMedia
