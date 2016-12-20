import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import ApplicationsPage from '../../pages/applications'


describe('Applications Page React component', () => {

  it('Renders correctly', () => {
    const ApplicationsPageStubbed = stubContext(ApplicationsPage, context)
    const component = renderer.create(
      <ApplicationsPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
