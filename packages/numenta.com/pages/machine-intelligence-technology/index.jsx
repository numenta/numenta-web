// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import NextSection from 'numenta-web-shared-components/lib/NextSection'
import {scrollToSection} from 'numenta-web-shared-utils/lib/client'
import Section from 'numenta-web-shared-components/lib/Section'

import MainSections, {getNextSection} from '../_MainSections'
import SectionTechnology from './_Section'

const Default = (<SectionTechnology key="sectionTechnology" />)
const title = 'Technology Overview'


/**
 * Machine Intelligence Technology page and MainSection wrapper - React
 *  view component.
 */
class TechPage extends React.Component {

  constructor(props) {
    super(props)
    const next = getNextSection(Default)

    this.state = {
      sections: (
        <Section headline={true} open={true} title={title}>
          {Default}
          <NextSection {...next} />
        </Section>
      ),
    }
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

export default TechPage
