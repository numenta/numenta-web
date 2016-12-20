import React from 'react'
import renderer from 'react-test-renderer'

import TextLink from '../../TextLink'


describe('TextLink React component', () => {

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <TextLink to="http://numenta.com">
        Numenta Homepage
      </TextLink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Augmented correctly', () => {
    const component = renderer.create(
      <TextLink
        onClick={() => {}}
        target="_blank"
        to="http://numenta.com"
      >
        Numenta Homepage
      </TextLink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
