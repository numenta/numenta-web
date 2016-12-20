import React from 'react'
import renderer from 'react-test-renderer'

import FormCheckbox from '../../FormCheckbox'


describe('FormCheckbox React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <FormCheckbox
        name="field"
        onClick={() => {}}
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
