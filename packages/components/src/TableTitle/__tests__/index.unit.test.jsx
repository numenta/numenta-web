import React from 'react'
import renderer from 'react-test-renderer'

import TableTitle from '../../TableTitle'


describe('TableTitle React component', () => {

  it('Renders Bordered correctly', () => {
    const component = renderer.create(
      <TableTitle border={true}>
        Some Statistics
      </TableTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Un-bordered correctly', () => {
    const component = renderer.create(
      <TableTitle border={false}>
        Some Statistics
      </TableTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders with Expanded Column Span correctly', () => {
    const component = renderer.create(
      <TableTitle colSpan={2}>
        Some Statistics
      </TableTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
