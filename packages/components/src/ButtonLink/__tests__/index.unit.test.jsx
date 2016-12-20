import React from 'react'
import renderer from 'react-test-renderer'

import ButtonLink from '../../ButtonLink'


describe('ButtonLink React component', () => {

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <ButtonLink
        onClick={() => {}}
        to="http://numenta.com"
      >
        Title
      </ButtonLink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Disabled correctly', () => {
    const component = renderer.create(
      <ButtonLink
        disabled={true}
        onClick={() => {}}
        to="http://numenta.com"
      >
        Title
      </ButtonLink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
