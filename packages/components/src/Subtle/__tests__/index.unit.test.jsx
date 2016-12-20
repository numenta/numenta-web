import React from 'react'
import renderer from 'react-test-renderer'

import Subtle from '../../Subtle'


describe('Subtle React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Subtle>Quiet Text</Subtle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
