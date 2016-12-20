import React from 'react'
import renderer from 'react-test-renderer'

import DefineTitle from '../../DefineTitle'


describe('DefineTitle React component', () => {

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <DefineTitle>
        Title 1
      </DefineTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Horizontally correctly', () => {
    const component = renderer.create(
      <DefineTitle direction="horizontal">
        Title 1
      </DefineTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Vertically correctly', () => {
    const component = renderer.create(
      <DefineTitle direction="vertical">
        Title 1
      </DefineTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
