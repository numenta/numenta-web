// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Markdown from '../Markdown'


/**
 * Markdown Body item text wrapper for lone Markdown text columns.
 */
const MarkdownBody = ({markdown}) => {
  const {body} = markdown

  return (
    <Markdown>
      <div dangerouslySetInnerHTML={{__html: body}} />
    </Markdown>
  )
}

MarkdownBody.propTypes = {
  markdown: React.PropTypes.object.isRequired,
}

export default MarkdownBody
