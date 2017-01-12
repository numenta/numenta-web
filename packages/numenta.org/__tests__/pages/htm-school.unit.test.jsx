import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import SchoolPage from '../../pages/htm-school'


describe('HTM School Page React component', () => {

  it('Renders correctly', () => {
    const SchoolPageStubbed = stubContext(SchoolPage, context)
    const component = renderer.create(
      <SchoolPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
