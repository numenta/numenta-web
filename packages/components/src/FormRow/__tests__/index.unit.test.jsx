import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../../Form'
import FormInput from '../../FormInput'
import FormLabel from '../../FormLabel'
import FormRow from '../../FormRow'


describe('FormRow React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Form>
        <FormRow>
          <FormLabel for="field1">
            Label 1
          </FormLabel>
          <FormInput name="field1" type="text" value="Testing 1" />
        </FormRow>
        <FormRow>
          <FormLabel for="field2">
            Label 2
          </FormLabel>
          <FormInput name="field2" type="text" value="Testing 2" />
        </FormRow>
      </Form>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
