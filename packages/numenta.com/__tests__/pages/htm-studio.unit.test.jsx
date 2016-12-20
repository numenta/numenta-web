import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import HtmStudioPage from '../../pages/htm-studio'


describe('HTM Studio Page React component', () => {

  it('Renders correctly', () => {
    const HtmStudioPageStubbed = stubContext(HtmStudioPage, context)
    const component = renderer.create(
      <HtmStudioPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
