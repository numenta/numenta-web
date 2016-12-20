// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import NextSection from 'numenta-web-shared-components/lib/NextSection'
import {scrollToSection} from 'numenta-web-shared-utils/lib/client'
import Section from 'numenta-web-shared-components/lib/Section'

import MainSections from '../_MainSections'
import SectionContact from './_Section'

const Default = (<SectionContact key="sectionContact" />)
const title = 'Contact'


/**
 * Contact page and MainSection wrapper - React view component.
 */
class ContactPage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title={title}>
        {Default}
        <NextSection title="Back to Home" url="/" />
      </Section>
    ),
  }

  componentDidMount() {
    this.setState({
      sections: (<MainSections current={Default} />),
    })
  }

  componentDidUpdate() {
    scrollToSection(global.document.getElementById(Default.key))
  }

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state
    return (
      <div>
        <Helmet title={title} />
        {sections}
      </div>
    )
  }
}

export default ContactPage
