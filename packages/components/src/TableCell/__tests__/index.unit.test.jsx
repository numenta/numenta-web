import React from 'react'
import renderer from 'react-test-renderer'

import TableCell from '../../TableCell'


describe('TableCell React component', () => {

  it('Renders Bordered correctly', () => {
    const component = renderer.create(
      <TableCell border={true}>
        Cell
      </TableCell>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Un-bordered correctly', () => {
    const component = renderer.create(
      <TableCell border={false}>
        Cell
      </TableCell>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders with Expanded Column Span correctly', () => {
    const component = renderer.create(
      <TableCell colSpan={2}>
        Cell
      </TableCell>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
