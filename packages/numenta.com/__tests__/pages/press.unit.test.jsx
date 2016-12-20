import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import PressPage from '../../pages/press'


describe('Press Page React component', () => {

  it('Renders correctly', () => {
    const PressPageStubbed = stubContext(PressPage, context)
    const component = renderer.create(
      <PressPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
