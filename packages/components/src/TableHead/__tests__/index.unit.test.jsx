import React from 'react'
import renderer from 'react-test-renderer'

import TableHead from '../../TableHead'
import TableRow from '../../TableRow'
import TableTitle from '../../TableTitle'


describe('TableHead React component', () => {

  it('Renders Bordered correctly', () => {
    const component = renderer.create(
      <TableHead border={true}>
        <TableRow>
          <TableTitle>
            Table Title 1
          </TableTitle>
          <TableTitle>
            Table Title 2
          </TableTitle>
        </TableRow>
      </TableHead>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Un-bordered correctly', () => {
    const component = renderer.create(
      <TableHead border={false}>
        <TableRow>
          <TableTitle>
            Table Title 1
          </TableTitle>
          <TableTitle>
            Table Title 2
          </TableTitle>
        </TableRow>
      </TableHead>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
