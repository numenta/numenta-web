import React from 'react'
import renderer from 'react-test-renderer'

import List from '../../List'
import ListItem from '../../ListItem'


describe('List React component', () => {

  it('Renders correctly with default props', () => {
    const component = renderer.create(
      <List>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders correctly with text-copy prop', () => {
    const component = renderer.create(
      <List copy={true}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders correctly without text-copy prop', () => {
    const component = renderer.create(
      <List copy={false}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })


  it('Renders correctly with circle marker', () => {
    const component = renderer.create(
      <List marker="circle">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders correctly with disc marker', () => {
    const component = renderer.create(
      <List marker="disc">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
