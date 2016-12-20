import React from 'react'
import renderer from 'react-test-renderer'

import FormLabel from '../../FormLabel'


describe('FormLabel React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <FormLabel htmlFor="field">
        Label
      </FormLabel>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
