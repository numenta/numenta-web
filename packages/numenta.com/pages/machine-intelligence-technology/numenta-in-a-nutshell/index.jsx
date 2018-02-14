// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import NextSection from 'numenta-web-shared-components/lib/NextSection'
import {
  scrollToSection, getMetadataTags} from 'numenta-web-shared-utils/lib/client'
import Section from 'numenta-web-shared-components/lib/Section'
import {prefixLink} from 'gatsby-helpers'

import ContentLeft from './_content/_left.md'
import ContentRight from './_content/_right.md'

import MainSections, {getNextSection} from '../../_MainSections'
import SectionNutshell from './_Section'

const Default = (<SectionNutshell key="sectionNutshell" />)
const title = 'Numenta in a Nutshell'


/**
 * Numenta in a Nutshell page and MainSection wrapper - React
 *  view component.
 */
class NumentaNutshellPage extends React.Component {
  static contextTypes = {
    config: React.PropTypes.object,
  }

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
    const {config} = this.context
    return (
      <div>
        <Helmet title={title}>
          {getMetadataTags(ContentLeft, config.baseUrl, {
            'twitter:image': config.baseUrl + prefixLink(ContentRight.image)})}
        </Helmet>
        {sections}
      </div>
    )
  }

}

export default NumentaNutshellPage
