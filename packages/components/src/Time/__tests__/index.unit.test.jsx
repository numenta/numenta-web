import moment from 'moment'
import React from 'react'
import renderer from 'react-test-renderer'

import Time from '../../Time'

const when = '2016-09-21T18:10:32'


describe('Time React component', () => {

  it('Renders correctly', () => {
    const occur = moment(new Date(when)).utcOffset(0, false)
    const component = renderer.create(
      <Time moment={occur}>
        {when}
      </Time>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
