import React from 'react'
import renderer from 'react-test-renderer'

import Strong from '../../Strong'


describe('Strong React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Strong>
        Heavy Text
      </Strong>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
