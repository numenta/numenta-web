import React from 'react'
import renderer from 'react-test-renderer'

import DefineItem from '../../DefineItem'


describe('DefineItem React component', () => {

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <DefineItem>
        Item
      </DefineItem>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Horizontal correctly', () => {
    const component = renderer.create(
      <DefineItem direction="horizontal">
        Item
      </DefineItem>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Vertical correctly', () => {
    const component = renderer.create(
      <DefineItem direction="vertical">
        Item
      </DefineItem>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
