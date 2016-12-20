// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'


/**
 * Gatsby JSON Wrapper - React view component.
 */
const JsonWrapper = ({route}) => {
  const data = route.page.data

  return (
    <div className="json">
      <h1>
        {data.title}
      </h1>
      <p>
        Raw view of json file
      </p>
      <pre dangerouslySetInnerHTML={{__html: JSON.stringify(data, null, 4)}} />
    </div>
  )
}

JsonWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default JsonWrapper
