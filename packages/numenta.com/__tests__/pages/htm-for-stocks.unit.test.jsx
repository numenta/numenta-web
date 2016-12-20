import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import HtmStocksPage from '../../pages/htm-for-stocks'


describe('HTM for Stocks Page React component', () => {

  it('Renders correctly', () => {
    const HtmStocksPageStubbed = stubContext(HtmStocksPage, context)
    const component = renderer.create(
      <HtmStocksPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
