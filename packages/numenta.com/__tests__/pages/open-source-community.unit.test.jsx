import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import OpensourcePage from '../../pages/open-source-community'


describe('Open Source Community Page React component', () => {

  it('Renders correctly', () => {
    const OpensourcePageStubbed = stubContext(OpensourcePage, context)
    const component = renderer.create(
      <OpensourcePageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
