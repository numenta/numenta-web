import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import NabPage from '../../pages/numenta-anomaly-benchmark'


describe('Numenta Anomaly Benchmark (NAB) Page React component', () => {

  it('Renders correctly', () => {
    const NabPageStubbed = stubContext(NabPage, context)
    const component = renderer.create(
      <NabPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
