import React from 'react'
import renderer from 'react-test-renderer'

import TableCell from '../../TableCell'
import TableRow from '../../TableRow'


describe('TableRow React component', () => {

  it('Renders Bordered correctly', () => {
    const component = renderer.create(
      <TableRow border={true}>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Un-bordered correctly', () => {
    const component = renderer.create(
      <TableRow border={false}>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
