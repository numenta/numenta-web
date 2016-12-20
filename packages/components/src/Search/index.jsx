// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import IconSearch from 'react-icons/lib/fa/search'
import {inHTMLData} from 'xss-filters'
import lunr from 'lunr'
import {prefixLink} from 'gatsby-helpers'
import React from 'react'
import request from 'superagent'
import {stampUrl} from 'numenta-web-shared-utils/lib/shared'

import Button from '../Button'
import Form from '../Form'
import FormInput from '../FormInput'
import FormLabel from '../FormLabel'
import SearchResult from '../SearchResult'

import styles from './index.css'


/**
 * Search Query Component
 * @requires js-search
 * @see https://github.com/bvaughn/js-search
 */
class Search extends React.Component {

  static contextTypes = {
    manifest: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    icon: React.PropTypes.element,
  }

  constructor(props) {
    super(props)

    // init client-side search indexing
    this._documents = {}
    this._index = lunr(function () {
      this.ref('path')
      this.field('title', {boost: 10})
      this.field('text')
      this.pipeline.remove(lunr.stopWordFilter)
    })

    this.state = {query: ''}
  }

  componentDidMount() {
    const {manifest} = this.context
    const {version} = manifest

    request
      .get(prefixLink(stampUrl('/_searchIndex.json', version)))  // load index
      .set('Accept', 'application/json')
      .end((error, results) => {
        if (error || !results || !('body' in results)) return
        results.body.forEach((doc) => {
          const {path, text, title} = doc
          this._documents[path] = {text, title}  // save
          this._index.add(doc)  // index
        })
      })
  }

  componentWillUnmount() {
    this._documents = {}
    this._index = null
  }

  _performSearch(query) {
    this.setState({
      query: inHTMLData(query),
    })
  }

  render() {
    const {query} = this.state
    let {icon} = this.props
    let matches, results

    if (!icon) icon = (<IconSearch color="inherit" />)

    if (query) {
      matches = this._index
        .search(query)
        .slice(0, 30)
        .map(({ref}) => {
          const {title, text} = this._documents[ref]
          return {path: ref, title, text}
        })
      results = (
        <SearchResult
          onClose={() => this._performSearch('')}
          onOpen={() => global.document.getElementById('q').focus()}
          query={query}
          results={matches}
        />
      )
    }

    return (
      <div className={styles.search}>
        <Form onSubmit={(event) => event.preventDefault()}>
          <span className={styles.label}>
            <FormLabel htmlFor="q">Search</FormLabel>
          </span>
          <span className={styles.query}>
            <FormInput
              name="q"
              onChange={(event) => this._performSearch(event.target.value)}
              placeholder="Search..."
              type="search"
              value={query}
            />
          </span>
          <Button
            onClick={(event) => event.preventDefault()}
            theme="light"
            type="submit"
          >
            {icon}
          </Button>
          {results}
        </Form>
      </div>
    )
  }
}

export default Search
