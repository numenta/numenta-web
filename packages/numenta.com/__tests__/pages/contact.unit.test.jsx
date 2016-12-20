import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import ContactPage from '../../pages/contact'


describe('Contact Page React component', () => {

  it('Renders correctly', () => {
    const ContactPageStubbed = stubContext(ContactPage, context)
    const component = renderer.create(
      <ContactPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
