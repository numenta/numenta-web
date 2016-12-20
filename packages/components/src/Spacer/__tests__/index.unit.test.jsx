import React from 'react'
import renderer from 'react-test-renderer'

import Spacer from '../../Spacer'


describe('Spacer React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Spacer />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
