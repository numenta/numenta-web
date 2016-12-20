import React from 'react'
import renderer from 'react-test-renderer'

import Paragraph from '../../Paragraph'


describe('Paragraph React component', () => {

  it('Renders Lead correctly', () => {
    const component = renderer.create(
      <Paragraph lead={true}>
        Headline
      </Paragraph>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <Paragraph lead={false}>
        Contents
      </Paragraph>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
