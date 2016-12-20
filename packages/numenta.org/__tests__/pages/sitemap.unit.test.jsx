import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import SitemapPage from '../../pages/sitemap'


describe('Sitemap Page React component', () => {

  it('Renders correctly', () => {
    const SitemapPageStubbed = stubContext(SitemapPage, context)
    const component = renderer.create(
      <SitemapPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
