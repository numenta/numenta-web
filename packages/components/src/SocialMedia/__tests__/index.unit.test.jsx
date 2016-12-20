import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import SocialMedia from '../../SocialMedia'


describe('SocialMedia React component', () => {

  it('Renders correctly', () => {
    const SocialMediaStubbed = stubContext(SocialMedia, context)
    const component = renderer.create(
      <SocialMediaStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
