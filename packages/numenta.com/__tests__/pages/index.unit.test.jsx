import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import IndexPage from '../../pages/index'


describe('Index Page React component', () => {

  it('Renders correctly', () => {
    const IndexPageStubbed = stubContext(IndexPage, context)
    const component = renderer.create(
      <IndexPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
