import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import CommunityPage from '../../pages/community'


describe('Community Page React component', () => {

  it('Renders correctly', () => {
    const CommunityPageStubbed = stubContext(CommunityPage, context)
    const component = renderer.create(
      <CommunityPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
