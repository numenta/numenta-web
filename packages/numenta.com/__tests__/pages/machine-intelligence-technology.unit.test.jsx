import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import MachinePage from '../../pages/machine-intelligence-technology'


describe('Machine Intelligence Technology Page React component', () => {

  it('Renders correctly', () => {
    const MachinePageStubbed = stubContext(MachinePage, context)
    const component = renderer.create(
      <MachinePageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
