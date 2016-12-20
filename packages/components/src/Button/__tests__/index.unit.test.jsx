import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../../Button'


describe('Button React component', () => {

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <Button
        onClick={() => {}}
      >
        Title
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Disabled correctly', () => {
    const component = renderer.create(
      <Button
        disabled={true}
        onClick={() => {}}
      >
        Title
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Type:Submit correctly', () => {
    const component = renderer.create(
      <Button
        onClick={() => {}}
        type="submit"
      >
        Title
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Theme:Light correctly', () => {
    const component = renderer.create(
      <Button
        onClick={() => {}}
        theme="light"
      >
        Title
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Theme:Primary correctly', () => {
    const component = renderer.create(
      <Button
        onClick={() => {}}
        theme="primary"
      >
        Title
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Theme:Short correctly', () => {
    const component = renderer.create(
      <Button
        onClick={() => {}}
        theme="short"
      >
        Title
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
