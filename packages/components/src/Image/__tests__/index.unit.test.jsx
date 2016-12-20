import React from 'react'
import renderer from 'react-test-renderer'

import Image from '../../Image'


describe('Image React component', () => {

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <Image
        alt="Brain"
        border={false}
        center={false}
        onClick={() => {}}
        round={false}
        shadow={true}
        src="brain.png"
        title="Brain"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Alternate correctly', () => {
    const component = renderer.create(
      <Image
        alt="Brain"
        border={true}
        center={true}
        onClick={() => {}}
        round={true}
        shadow={false}
        src="brain.png"
        title="Brain"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Responsive Max-width 100% correctly', () => {
    const component = renderer.create(
      <Image
        alt="Brain"
        onClick={() => {}}
        respond="mw"
        src="brain.png"
        title="Brain"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Responsive Width 100% correctly', () => {
    const component = renderer.create(
      <Image
        alt="Brain"
        onClick={() => {}}
        respond="w"
        src="brain.png"
        title="Brain"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
