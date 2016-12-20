import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'
import post from '__tests__/__mocks__/postMock'

import Md from '../../wrappers/md'

const route = {page: post}


describe('MD Wrapper React component', () => {

  it('Renders correctly', () => {
    const MdStubbed = stubContext(Md, context)
    const component = renderer.create(
      <MdStubbed route={route}>
        ## Hello
      </MdStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
