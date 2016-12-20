import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import Pingdom from '../../Pingdom'


describe('Pingdom React component', () => {

  it('Renders correctly', () => {
    const PingdomStubbed = stubContext(Pingdom, context)
    const component = renderer.create(
      <PingdomStubbed id="abcd1234" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
