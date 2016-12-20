// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Image from '../Image'

import styles from './index.css'

import ImageAlexanderLavin from './images/alexander-lavin.png'
import ImageBrevPatterson from './images/brev-patterson.png'
import ImageCelesteBaranski from './images/celeste-baranski.png'
import ImageChetanSurpur from './images/chetan-surpur.png'
import ImageChristyMaver from './images/christy-maver.png'
import ImageCraigVaughan from './images/craig-vaughan.png'
import ImageDefault from './images/default.png'
import ImageDonnaDubinsky from './images/donna-dubinsky.png'
import ImageIanDanforth from './images/ian-danforth.png'
import ImageJaredCasner from './images/jared-casner.png'
import ImageJaredWeiss from './images/jared-weiss.png'
import ImageJeffHawkins from './images/jeff-hawkins.png'
import ImageJoeBlock from './images/joe-block.png'
import ImageJoeHayashi from './images/joe-hayashi.png'
import ImageMatthewTaylor from './images/matthew-taylor.png'
import ImageNickDeFalco from './images/nick-defalco.png'
import ImageNumenta from './images/numenta.png'
import ImageRahulAgarwal from './images/rahul-agarwal.png'
import ImageRobHaitani from './images/rob-haitani.png'
import ImageScottPurdy from './images/scott-purdy.png'
import ImageSubutaiAhmad from './images/subutai-ahmad.png'
import ImageTaylorWirfs from './images/taylor-wirfs.png'
import ImageVirajSinha from './images/viraj-sinha.png'
import ImageYuweiCui from './images/yuwei-cui.png'
import ImageZuhaAgha from './images/zuha-agha.png'

const avatars = {
  ImageAlexanderLavin,
  ImageBrevPatterson,
  ImageCelesteBaranski,
  ImageChetanSurpur,
  ImageChristyMaver,
  ImageCraigVaughan,
  ImageDonnaDubinsky,
  ImageIanDanforth,
  ImageJaredCasner,
  ImageJaredWeiss,
  ImageJeffHawkins,
  ImageJoeBlock,
  ImageJoeHayashi,
  ImageMatthewTaylor,
  ImageNickDeFalco,
  ImageNumenta,
  ImageRahulAgarwal,
  ImageRobHaitani,
  ImageScottPurdy,
  ImageSubutaiAhmad,
  ImageTaylorWirfs,
  ImageVirajSinha,
  ImageYuweiCui,
  ImageZuhaAgha,
}


/**
 *
 */
const Avatar = ({name}) => {
  let person = name
  let photo = null

  if (name && name.length > 0) {
    person = name.replace(/\s/g, '')
  }

  photo = avatars[`Image${person}`] || ImageDefault

  return (
    <span className={styles.avatar}>
      <Image
        alt={name}
        border={true}
        round={true}
        shadow={false}
        src={photo}
        title={name}
      />
    </span>
  )
}

Avatar.propTypes = {
  name: React.PropTypes.string.isRequired,
}

export default Avatar
