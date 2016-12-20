import React from 'react'
import renderer from 'react-test-renderer'

import Video from '../../Video'


describe('Video React view component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Video
        image="filename.ext"
        respond="mw"
        time="02:23"
        title="Video Title"
        type="youtube"
        videoId="abcd1234"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // @TODO test interaction

})
