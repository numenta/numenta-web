import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import Search from '../../Search'

const SearchStubbed = stubContext(Search, context)


describe('Search React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <SearchStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
