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
const MarkdownMedia = ({border, markdown, shadow}) => {
  const {hideImage, image, sound, time, title, video} = markdown
  const heading = title || 'Numenta Media'
  let media

  if (image && !hideImage) {
    if (video) {
      media = (
        <Video
          border={border}
          image={image}
          respond="mw"
          shadow={true}
          time={time}
          title={heading}
          type="youtube"
          videoId={getVideoIdFromUrl(video)}
        />
      )
    }
    else if (sound) {
      media = (
        <Sound
          border={border}
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
          border={border}
          respond="mw"
          shadow={shadow}
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
  border: React.PropTypes.bool,
  shadow: React.PropTypes.bool,
  markdown: React.PropTypes.object.isRequired,
}

MarkdownMedia.defaultProps = {
  border: true,
  shadow: true,
}

export default MarkdownMedia
