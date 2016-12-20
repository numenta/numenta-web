import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import BamiPage from '../../pages/biological-and-machine-intelligence'


describe('Bio and Machine Intelligence (BAMI) page React component', () => {

  it('Renders correctly', () => {
    const BamiPageStubbed = stubContext(BamiPage, context)
    const component = renderer.create(
      <BamiPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
