import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import PartnersPage from '../../pages/partners'


describe('Partners Page React component', () => {

  it('Renders correctly', () => {
    const PartnersPageStubbed = stubContext(PartnersPage, context)
    const component = renderer.create(
      <PartnersPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
