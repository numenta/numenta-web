import React from 'react'
import renderer from 'react-test-renderer'

import NextSection from '../../NextSection'


describe('NextSection React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <NextSection
        title="Mission & History"
        url="/mission-and-history/"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
