import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../../Form'
import FormLabel from '../../FormLabel'
import FormRow from '../../FormRow'
import FormTextArea from '../../FormTextArea'


describe('FormTextArea React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Form
        action="http://numenta.com"
        name="form"
        onSubmit={() => {}}
      >
        <FormRow>
          <FormLabel for="field">
            Label
          </FormLabel>
          <FormTextArea name="field" placeholder="Default">
            Contents
          </FormTextArea>
        </FormRow>
      </Form>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
