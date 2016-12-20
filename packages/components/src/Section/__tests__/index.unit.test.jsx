import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '__tests__/__mocks__/reactContextMock'

import Section from '../../Section'

const SectionStubbed = stubContext(Section, context)


describe('Section React component', () => {

  it('Renders Closed with No Headline correctly', () => {
    const component = renderer.create(
      <SectionStubbed
        headline={false}
        id="section"
        open={false}
        title="Section Title"
        url="/path/"
      >
        Section Content
      </SectionStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Closed with Headline correctly', () => {
    const component = renderer.create(
      <SectionStubbed
        headline={true}
        id="section"
        open={false}
        title="Section Title"
      >
        Section Content
      </SectionStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Open with No Headline correctly', () => {
    const component = renderer.create(
      <SectionStubbed
        headline={false}
        id="section"
        open={true}
        title="Section Title"
        url="/path/"
      >
        Section Content
      </SectionStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Open with Headline correctly', () => {
    const component = renderer.create(
      <SectionStubbed
        headline={true}
        id="section"
        open={true}
        title="Section Title"
      >
        Section Content
      </SectionStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
