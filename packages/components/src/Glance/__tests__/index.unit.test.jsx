import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import DefineItem from '../../DefineItem'
import DefineTitle from '../../DefineTitle'
import Glance from '../../Glance'


describe('Glance React component', () => {

  it('Renders correctly', () => {
    const GlanceStubbed = stubContext(Glance, context)
    const component = renderer.create(
      <GlanceStubbed head={<h2>Glance Header</h2>}>
        <DefineTitle>
          Title
        </DefineTitle>
        <DefineItem>
          Definition
        </DefineItem>

        <DefineTitle>
          Another
        </DefineTitle>
        <DefineItem>
          Last
        </DefineItem>
      </GlanceStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
