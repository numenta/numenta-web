// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import {getBrowserWidth} from 'numenta-web-shared-utils/lib/client'
import {getModalWidth} from 'numenta-web-shared-utils/lib/shared'
import IconClose from 'react-icons/lib/fa/close'
import Modal from 'react-modal'
import React from 'react'
import YouTube from 'react-youtube'

import Image from '../Image'

import modalStyles from './_style-modal'
import styles from './index.css'


/**
 * Video Holder and Player - React view component.
 */
class Video extends React.Component {

  static propTypes = {
    image: React.PropTypes.string.isRequired,
    respond: React.PropTypes.oneOf(['mw', 'w']),
    time: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['youtube']).isRequired,
    videoId: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    type: 'youtube',
  }

  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  _playerClose() {
    this.setState({open: false})
  }

  _playerOpen() {
    this.setState({open: true})
  }

  render() {
    const {image, respond, time, title, type, videoId} = this.props
    const {open} = this.state
    const isOpen = open === true
    const modalWidth = getModalWidth(getBrowserWidth())
    const playerOptions = {
      width: modalWidth.toString(),
      height: (modalWidth * (360 / 640)).toString(),  // ~640x360
      playerVars: {autoplay: 1},
    }
    const titleLine = time ? `${title} (${time})` : title
    const alternate = `${title} ${type} video screenshot`
    let player

    if (isOpen && videoId && type === 'youtube') {
      player = (<YouTube opts={playerOptions} videoId={videoId} />)
    }

    return (
      <div className={styles.video}>
        <Image
          alt={alternate}
          border={true}
          onClick={() => this._playerOpen()}
          respond={respond}
          src={image}
        />
        <div className={styles.caption}>
          Video: {titleLine}
        </div>
        <Modal
          contentLabel={`Video: ${titleLine}`}
          isOpen={open}
          onRequestClose={() => this._playerClose()}
          style={modalStyles}
        >
          <div className={styles.close}>
            <IconClose
              color="inherit"
              onClick={() => this._playerClose()}
              title="Close"
            />
          </div>
          <div>
            {player}
          </div>
        </Modal>
      </div>
    )
  }

}

export default Video
