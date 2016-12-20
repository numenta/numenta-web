import IconArrowLeft from 'react-icons/lib/fa/arrow-circle-o-left'
import React from 'react'
import renderer from 'react-test-renderer'

import IconMarker from '../../IconMarker'


describe('IconMarker React component', () => {

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <IconMarker>
        Hello Default
      </IconMarker>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Custom Icon correctly', () => {
    const component = renderer.create(
      <IconMarker icon={<IconArrowLeft />}>
        Hello Icon
      </IconMarker>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
