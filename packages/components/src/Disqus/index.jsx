// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'
import root from 'window-or-global'

import styles from './index.css'


/**
 * Disqus Comments Thread React Component.
 *  Custom, as `react-disqus-thread` is not working.
 * @see github:mzabriskie/react-disqus-thread/issues/14#issuecomment-234407160
 */
class Disqus extends React.Component {

  constructor(props) {
    super(props)
    this.state = props
  }

  componentWillMount() {
    const {document} = root
    const component = this
    const script = document.createElement('script')
    root.disqus_config = function () {
      this.page.category_id = component.state.category_id
      this.page.identifier = component.state.identifier
      this.page.title = component.state.title
      this.page.url = component.state.url
      this.callbacks.onNewComment = component.state.onNewComment
    }
    script.src = `//${this.state.shortname}.disqus.com/embed.js`
    script.async = true
    document.body.appendChild(script)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps)
  }

  render() {
    return (
      <div className={styles.disqus} id="disqus_thread" />
    )
  }

}

Disqus.propTypes = {
  category_id: React.PropTypes.string,
  identifier: React.PropTypes.string,
  onNewComment: React.PropTypes.func,
  shortname: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  url: React.PropTypes.string,
}

export default Disqus
