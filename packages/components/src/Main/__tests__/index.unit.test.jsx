import React from 'react'
import renderer from 'react-test-renderer'

import Main from '../../Main'


describe('Main React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Main>
        <div>Hello</div>
      </Main>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
