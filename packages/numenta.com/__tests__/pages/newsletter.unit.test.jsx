import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import NewsletterPage from '../../pages/newsletter'


describe('Newsletter Page React component', () => {

  it('Renders correctly', () => {
    const NewsletterPageStubbed = stubContext(NewsletterPage, context)
    const component = renderer.create(
      <NewsletterPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
