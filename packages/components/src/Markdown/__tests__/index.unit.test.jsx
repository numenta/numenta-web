import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Markdown from '../../Markdown'


describe('Markdown React component', () => {

  it('Renders correctly', () => {
    const component = TestUtils.renderIntoDocument(
      <Markdown>
        Content
      </Markdown>
    )
    const element = component._markdown  // get ref
    expect(element.textContent).toEqual('Content')
    expect(element.className).toEqual('markdown')
  })

  // @TODO more in depth testing below...
  //    Especially links+types, catchLinks(), etc!
  //
  // it('Mounts correctly', () => {
  //   TestUtils.Simulate.change(
  //     TestUtils.findRenderedDOMComponentWithTag(component, 'input')
  //   )
  //   expect(checkboxNode.textContent).toEqual('On')
  // })

})
