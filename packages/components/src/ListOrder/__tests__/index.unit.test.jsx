import React from 'react'
import renderer from 'react-test-renderer'

import ListItem from '../../ListItem'
import ListOrder from '../../ListOrder'


describe('ListOrder React component', () => {

  it('Renders correctly with default props', () => {
    const component = renderer.create(
      <ListOrder>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </ListOrder>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders correctly with text-copy prop', () => {
    const component = renderer.create(
      <ListOrder copy={true}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </ListOrder>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders correctly without text-copy prop', () => {
    const component = renderer.create(
      <ListOrder copy={false}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </ListOrder>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })


  it('Renders correctly with decimal marker', () => {
    const component = renderer.create(
      <ListOrder marker="decimal">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </ListOrder>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders correctly with disc marker', () => {
    const component = renderer.create(
      <ListOrder marker="disc">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </ListOrder>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
