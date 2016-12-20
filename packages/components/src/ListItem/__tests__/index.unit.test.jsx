import React from 'react'
import renderer from 'react-test-renderer'

import ListItem from '../../ListItem'


describe('ListItem React component', () => {

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <ListItem>
        List Item
      </ListItem>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('Copy', () => {

    it('Renders correctly', () => {
      const component = renderer.create(
        <ListItem copy={true}>
          List Item
        </ListItem>
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('Renders Non correctly', () => {
      const component = renderer.create(
        <ListItem copy={false}>
          List Item
        </ListItem>
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Marker', () => {

    it('Renders Circle correctly', () => {
      const component = renderer.create(
        <ListItem marker="circle">
          List Item
        </ListItem>
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('Renders Decimal correctly', () => {
      const component = renderer.create(
        <ListItem marker="decimal">
          List Item
        </ListItem>
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('Renders Disc correctly', () => {
      const component = renderer.create(
        <ListItem marker="disc">
          List Item
        </ListItem>
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

  })

})
