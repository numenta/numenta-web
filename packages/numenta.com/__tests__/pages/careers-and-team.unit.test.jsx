import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import CareersPage from '../../pages/careers-and-team'


describe('Careers and Team Page React component', () => {

  it('Renders correctly', () => {
    const CareersPageStubbed = stubContext(CareersPage, context)
    const component = renderer.create(
      <CareersPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
