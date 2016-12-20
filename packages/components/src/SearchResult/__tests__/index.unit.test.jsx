import React from 'react'
import renderer from 'react-test-renderer'

import SearchResult from '../../SearchResult'


describe('SearchResult React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <SearchResult
        onClose={() => {}}
        onOpen={() => {}}
        query="re"
        results={[
          {path: '/1/', text: 'Uno', title: 'First'},
          {path: '/2/', text: 'Dos', title: 'Second'},
          {path: '/3/', text: 'Tres', title: 'Third'},
        ]}
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
