import React from 'react'
import renderer from 'react-test-renderer'

import Table from '../../Table'
import TableBody from '../../TableBody'
import TableCell from '../../TableCell'
import TableRow from '../../TableRow'


describe('Table React component', () => {

  it('Renders Bordered correctly', () => {
    const component = renderer.create(
      <Table border={true}>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Un-bordered correctly', () => {
    const component = renderer.create(
      <Table border={false}>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
