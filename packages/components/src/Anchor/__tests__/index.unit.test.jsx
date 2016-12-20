import React from 'react'
import renderer from 'react-test-renderer'

import Anchor from '../../Anchor'


describe('Anchor React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Anchor name="technology" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
