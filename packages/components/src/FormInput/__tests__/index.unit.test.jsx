import React from 'react'
import renderer from 'react-test-renderer'

import FormInput from '../../FormInput'


describe('FormInput React component', () => {

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <FormInput
        name="field"
        onChange={() => {}}
        placeholder="Default"
        type="text"
        value="Contents"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Small stretch correctly', () => {
    const component = renderer.create(
      <FormInput
        name="field"
        onChange={() => {}}
        placeholder="Default"
        stretch="small"
        type="text"
        value="Contents"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Medium stretch correctly', () => {
    const component = renderer.create(
      <FormInput
        name="field"
        onChange={() => {}}
        placeholder="Default"
        stretch="medium"
        type="text"
        value="Contents"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Large stretch correctly', () => {
    const component = renderer.create(
      <FormInput
        name="field"
        onChange={() => {}}
        placeholder="Default"
        stretch="large"
        type="text"
        value="Contents"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
