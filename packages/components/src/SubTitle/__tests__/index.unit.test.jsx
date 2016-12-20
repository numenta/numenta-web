import React from 'react'
import renderer from 'react-test-renderer'

import SubTitle from '../../SubTitle'


describe('SubTitle React component', () => {

  it('Renders Heading Level 2 correctly', () => {
    const component = renderer.create(
      <SubTitle>
        Level 2 Title
      </SubTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Heading Level 3 correctly', () => {
    const component = renderer.create(
      <SubTitle level={3}>
        Level 3 Title
      </SubTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Heading Level 4 correctly', () => {
    const component = renderer.create(
      <SubTitle level={4}>
        Level 4 Title
      </SubTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Heading Level 5 correctly', () => {
    const component = renderer.create(
      <SubTitle level={5}>
        Level 5 Title
      </SubTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Heading Level 6 correctly', () => {
    const component = renderer.create(
      <SubTitle level={6}>
        Level 6 Title
      </SubTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
