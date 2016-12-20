import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import MissionPage from '../../pages/mission-and-history'


describe('Mission and History Page React component', () => {

  it('Renders correctly', () => {
    const MissionPageStubbed = stubContext(MissionPage, context)
    const component = renderer.create(
      <MissionPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
