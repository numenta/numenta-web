import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'
import post from '__tests__/__mocks__/postMock'

import PostListRow from '../../PostListRow'


describe('PostListRow React component', () => {

  it('Renders correctly', () => {
    const PostListRowStubbed = stubContext(PostListRow, context)
    const component = renderer.create(
      <PostListRowStubbed post={post} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // @TODO test Image vs. Video on right side

})
