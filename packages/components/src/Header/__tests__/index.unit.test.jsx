import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import Header from '../../Header'
import Logo from '../../Logo'


describe('Header React component', () => {

  it('Renders correctly', () => {
    const HeaderStubbed = stubContext(Header, context)
    const component = renderer.create(
      <HeaderStubbed logo={<Logo />} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
