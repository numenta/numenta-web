import merge from 'lodash/merge'
import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'
import post from '__tests__/__mocks__/postMock'

import PostListItem from '../../PostListItem'


const PostListItemStubbed = stubContext(PostListItem, context)

const eventMock = {
  when: {
    begin: '2016/08/20 13:00',
    end: '2016/08/20 14:00',
  },
  where: {
    desc: 'Big Ben',
    city: 'London',
    state: 'England',
    country: 'UK',
    web: 'http://bigben.co.uk',
  },
}
const linkMock = '/press/2015/08/20/numenta-releases-product/'


describe('PostListItem React component', () => {

  it('Renders Normal Post (Blog, Press Release, etc.) correctly', () => {
    const component = renderer.create(
      <PostListItemStubbed post={post}>
        Blog-like Content
      </PostListItemStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Evented Post (Event) correctly', () => {
    const event = merge({}, post, eventMock)
    const component = renderer.create(
      <PostListItemStubbed post={event}>
        Event-like Content
      </PostListItemStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Link stub (Press Link) correctly', () => {
    const stem = linkMock.split('/').pop()
    const link = merge({}, post, {
      data: {
        link: 'http://numenta.com',
        type: 'link',
      },
      file: {
        dir: linkMock,
        path: linkMock,
        stem,
      },
      key: stem,
      path: linkMock,
    })
    const component = renderer.create(
      <PostListItemStubbed post={link} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
