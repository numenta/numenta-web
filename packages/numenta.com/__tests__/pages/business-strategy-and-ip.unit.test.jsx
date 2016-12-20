import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import BusinessPage from '../../pages/business-strategy-and-ip'


describe('Business Strategy and IP Page React component', () => {

  it('Renders correctly', () => {
    const BusinessPageStubbed = stubContext(BusinessPage, context)
    const component = renderer.create(
      <BusinessPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
