// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import NextSection from 'numenta-web-shared-components/lib/NextSection'
import Section from 'numenta-web-shared-components/lib/Section'

import MainSections, {getNextSection} from './_MainSections'
import SectionHome from './_Section'
import styles from './index.css'

const Default = (<SectionHome key="sectionHome" />)


/**
 * Numenta.org Homepage - React view component.
 */
class HomePage extends React.Component {

  constructor(props) {
    super(props)
    const next = getNextSection(Default)

    this.state = {
      sections: (
        <Section
          headline={true}
          open={true}
          title="Bridging the Gap Between Neuroscience and AI"
        >
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

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state
    return (
      <div className={styles.page}>
        {sections}
      </div>
    )
  }

}

export default HomePage
