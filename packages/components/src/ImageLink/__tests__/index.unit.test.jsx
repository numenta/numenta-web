import React from 'react'
import renderer from 'react-test-renderer'

import Image from '../../Image'
import ImageLink from '../../ImageLink'


describe('ImageLink React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <ImageLink title="Brain" to="http://numenta.com">
        <Image alt="Brain" src="brain.png" title="Brain Image" />
      </ImageLink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // @TODO test different link types (see README)

})
