import React from 'react'
import renderer from 'react-test-renderer'

import Disqus from '../../Disqus'


describe('Disqus React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Disqus
        category_id="abcd1234"
        identifier="unique"
        onNewComment={() => {}}
        shortname="disqus"
        title="Title"
        url="http://disqus.com"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
