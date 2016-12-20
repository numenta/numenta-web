import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import NeurosciencePage from '../../pages/neuroscience-research'


describe('Neuroscience Research Page React component', () => {

  it('Renders correctly', () => {
    const NeurosciencePageStubbed = stubContext(NeurosciencePage, context)
    const component = renderer.create(
      <NeurosciencePageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
