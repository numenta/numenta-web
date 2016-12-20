import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import Layout from '../../Layout'


describe('Layout React component', () => {

  it('Renders correctly', () => {
    const LayoutStubbed = stubContext(Layout, context)
    const component = renderer.create(
      <LayoutStubbed>
        <div>Site</div>
      </LayoutStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
