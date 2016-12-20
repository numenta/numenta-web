import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import EventsPage from '../../pages/events'


describe('Events Page React component', () => {

  it('Renders correctly', () => {
    const EventsPageStubbed = stubContext(EventsPage, context)
    const component = renderer.create(
      <EventsPageStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
