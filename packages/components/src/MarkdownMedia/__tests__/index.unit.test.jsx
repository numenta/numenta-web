import React from 'react'
import renderer from 'react-test-renderer'

import MarkdownMedia from '../../MarkdownMedia'

const media = {
  title: 'Test',
  image: 'test.png',
  hideImage: false,
  sound: false,
  video: false,
}


describe('MarkdownMedia React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <MarkdownMedia markdown={media} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
