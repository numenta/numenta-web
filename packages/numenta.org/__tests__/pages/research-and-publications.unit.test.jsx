import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import ResearchPage from '../../pages/research-and-publications'


describe('Research & Publications Page React component', () => {

  it('Renders correctly', () => {
    const ResearchPageStubbed = stubContext(ResearchPage, context)
    const component = renderer.create(
      <ResearchPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
