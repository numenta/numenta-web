import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import PapersPage from '../../pages/papers'


describe('Papers Page React component', () => {

  it('Renders correctly', () => {
    const PapersPageStubbed = stubContext(PapersPage, context)
    const component = renderer.create(
      <PapersPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
