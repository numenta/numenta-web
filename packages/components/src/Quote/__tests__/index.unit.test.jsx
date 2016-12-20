import React from 'react'
import renderer from 'react-test-renderer'

import Quote from '../../Quote'


describe('Quote React component', () => {

  it('Renders default correctly', () => {
    const component = renderer.create(
      <Quote>Today was a good day.</Quote>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders with Citation correctly', () => {
    const component = renderer.create(
      <Quote citation="Ice Cube">
        Today was a good day.
      </Quote>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
