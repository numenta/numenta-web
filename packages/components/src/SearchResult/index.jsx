// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import {getBrowserWidth} from 'numenta-web-shared-utils/lib/client'
import {getModalWidth} from 'numenta-web-shared-utils/lib/shared'
import unescape from 'lodash/unescape'
import Highlight from 'react-highlighter'
import Modal from 'react-modal'
import React from 'react'

import ListItem from '../ListItem'
import ListOrder from '../ListOrder'
import Paragraph from '../Paragraph'
import Strong from '../Strong'
import SubTitle from '../SubTitle'
import Subtle from '../Subtle'
import TextLink from '../TextLink'

import modalStyles from './_style-modal'
import styles from './index.css'

const filterText = (text) => unescape(text)
  .replace(/&#x27;/g, '')
  .replace(/['"]/g, '')
  .replace(/[^\x00-\x7F]/g, ' ')


/**
 *
 */
const SearchResult = ({onClose, onOpen, query, results}) => {
  const isOpen = (query.length > 0)
  const radius = 45
  const modalWidth = getModalWidth(getBrowserWidth(), {copy: true})
  let items = (
    <ListItem>No search results found.</ListItem>
  )

  if (isOpen && results && (results.length > 0)) {
    items = results.map(({path, text, title}) => {
      const matcher = new RegExp(
        `.{0,${radius}}?(${query}).{0,${radius}}`,
        'gi'
      )
      const matches = text.match(matcher) || []
      let quoted = ''

      if (matches) {
        quoted = matches.slice(0, 4).join(' ... ')  // 4 blurbs max per result
      }

      return (
        <ListItem key={path}>
          <TextLink
            onClick={onClose}
            to={path}
          >
            <Highlight search={query}>
              {filterText(title)}
            </Highlight>
          </TextLink>
          <br />
          <TextLink
            onClick={onClose}
            to={path}
          >
            <Subtle>
              {path}
            </Subtle>
          </TextLink>
          <Paragraph>
            “...{' '}
            <Highlight search={query}>
              {filterText(quoted)}
            </Highlight>
            {' '}...”
          </Paragraph>
        </ListItem>
      )
    })
  }

  modalStyles.content.width = modalWidth

  return (
    <Modal
      contentLabel={`Search Results for ${query}`}
      isOpen={isOpen}
      onAfterOpen={onOpen}
      onRequestClose={onClose}
      style={modalStyles}
    >
      <div className={styles.result}>
        <SubTitle>
          Search Results for <Strong>{query}:</Strong>
        </SubTitle>
        <ListOrder>
          {items}
        </ListOrder>
      </div>
    </Modal>
  )
}

SearchResult.propTypes = {
  onClose: React.PropTypes.func,
  onOpen: React.PropTypes.func,
  query: React.PropTypes.string,
  results: React.PropTypes.array,
}

export default SearchResult
