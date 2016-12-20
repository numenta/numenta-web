import React from 'react'
import renderer from 'react-test-renderer'

import TableBody from '../../TableBody'
import TableCell from '../../TableCell'
import TableRow from '../../TableRow'


describe('TableBody React component', () => {

  it('Renders Bordered correctly', () => {
    const component = renderer.create(
      <TableBody border={true}>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
      </TableBody>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Un-bordered correctly', () => {
    const component = renderer.create(
      <TableBody border={false}>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
      </TableBody>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
