import React from 'react'
import renderer from 'react-test-renderer'

import SectionTitle from '../../SectionTitle'


describe('SectionTitle React component', () => {

  describe('Headline version', () => {
    it('Renders Headline correctly', () => {
      const component = renderer.create(
        <SectionTitle
          clickHandle={() => {}}
          headline={true}
          title="Hover Hint"
        >
          Section Title
        </SectionTitle>
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Regular version', () => {
    it('Renders Regular Opened correctly', () => {
      const component = renderer.create(
        <SectionTitle
          clickHandle={() => {}}
          headline={false}
          open={true}
          title="Hover Hint"
        >
          Section Title
        </SectionTitle>
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('Renders Regular Closed correctly', () => {
      const component = renderer.create(
        <SectionTitle
          clickHandle={() => {}}
          headline={false}
          open={false}
          title="Hover Hint"
        >
          Section Title
        </SectionTitle>
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

})
