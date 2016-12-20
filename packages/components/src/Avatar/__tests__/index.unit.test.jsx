import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from '../../Avatar'


describe('Avatar React component', () => {

  it('Renders correctly for Name 1', () => {
    const component = renderer.create(
      <Avatar name="Jeff Hawkins" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders correctly for Name 2', () => {
    const component = renderer.create(
      <Avatar name="Ada Lovelace" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders correctly for Default', () => {
    const component = renderer.create(
      <Avatar name="" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
