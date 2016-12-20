import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import ImplementPage from '../../pages/implementations'


describe('Implementations Page React component', () => {

  it('Renders correctly', () => {
    const ImplementPageStubbed = stubContext(ImplementPage, context)
    const component = renderer.create(
      <ImplementPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
