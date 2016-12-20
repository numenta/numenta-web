import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import BlogPage from '../../pages/blog'


describe('Blog Page React component', () => {

  it('Renders correctly', () => {
    const BlogPageStubbed = stubContext(BlogPage, context)
    const component = renderer.create(
      <BlogPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
