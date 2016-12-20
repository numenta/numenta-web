import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import AnomalyPage from '../../pages/anomaly-detection-benchmark'


describe('Anomaly Detection Benchmark Page React component', () => {

  it('Renders correctly', () => {
    const AnomalyPageStubbed = stubContext(AnomalyPage, context)
    const component = renderer.create(
      <AnomalyPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
