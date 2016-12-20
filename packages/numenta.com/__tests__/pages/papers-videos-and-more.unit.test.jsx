import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import PapersMorePage from '../../pages/papers-videos-and-more'


describe('Papers Videos and More Page React component', () => {

  it('Renders correctly', () => {
    const PapersMorePageStubbed = stubContext(PapersMorePage, context)
    const component = renderer.create(
      <PapersMorePageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
