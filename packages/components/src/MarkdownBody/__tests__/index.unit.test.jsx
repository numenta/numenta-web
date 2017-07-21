import React from 'react'
import renderer from 'react-test-renderer'

import MarkdownBody from '../../MarkdownBody'

const body = '# Hello world  ## Whadup'


describe('MarkdownBody React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <MarkdownBody markdown={body} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
