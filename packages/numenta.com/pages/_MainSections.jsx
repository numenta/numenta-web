// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import findIndex from 'lodash/findIndex'
import React from 'react'
import root from 'window-or-global'

import {hasSessionStorage} from 'numenta-web-shared-utils/lib/client'
import Section from 'numenta-web-shared-components/lib/Section'

import SectionAnomaly from './anomaly-detection-benchmark/_Section'
import SectionApplications from './applications/_Section'
import SectionNeuroscience from './neuroscience-research/_Section'
import SectionBusiness from './business-strategy-and-ip/_Section'
import SectionCareers from './careers-and-team/_Section'
import SectionContact from './contact/_Section'
import SectionHome from './_Section'
import SectionMission from './mission-and-history/_Section'
import SectionOpensource from './open-source-community/_Section'
import SectionPapers from './papers-videos-and-more/_Section'
import SectionPartners from './partners/_Section'
import SectionTechnology from './machine-intelligence-technology/_Section'

const mainSectionList = [
  {
    component: <SectionHome key="sectionHome" />,
    title: 'Leading the New Era of Machine Intelligence',
    url: '/',
  },
  {
    component: <SectionMission key="sectionMission" />,
    title: 'Mission & History',
    url: '/mission-and-history/',
  },
  {
    component: <SectionNeuroscience key="sectionNeuroscience" />,
    title: 'Neuroscience Research',
    url: '/neuroscience-research/',
  },
  {
    component: <SectionTechnology key="sectionTechnology" />,
    title: 'Machine Intelligence Technology',
    url: '/machine-intelligence-technology/',
  },
  {
    component: <SectionOpensource key="sectionOpensource" />,
    title: 'Open Source Community',
    url: '/open-source-community/',
  },
  {
    component: <SectionApplications key="sectionApplications" />,
    title: 'Applications',
    url: '/applications/',
  },
  {
    component: <SectionPartners key="sectionPartners" />,
    title: 'Partners',
    url: '/partners/',
  },
  {
    component: <SectionBusiness key="sectionBusiness" />,
    title: 'Business Strategy & IP',
    url: '/business-strategy-and-ip/',
  },
  {
    component: <SectionAnomaly key="sectionAnomaly" />,
    title: 'Anomaly Detection Benchmark',
    url: '/anomaly-detection-benchmark/',
  },
  {
    component: <SectionPapers key="sectionResources" />,
    title: 'Papers, Videos & More',
    url: '/papers-videos-and-more/',
  },
  {
    component: <SectionCareers key="sectionCareers" />,
    title: 'Careers & Team',
    url: '/careers-and-team/',
  },
  {
    component: <SectionContact key="sectionContact" />,
    title: 'Contact',
    url: '/contact/',
  },
]

/**
 * Get the next MainSection in order.
 * @param {Object} current - MainSection object to use as `current`.
 * @public
 * @returns {Object} - Next MainSection in order after `current`.
 */
function getNextSection(current) {
  const nextIndex = findIndex(mainSectionList, (item) => (
    current.key === item.component.key
  ))

  if (nextIndex >= 0) {
    return mainSectionList[nextIndex + 1]
  }
  return null
}


/**
 * MainSections aggregator for Single-Page-App-style Homepage and Site.
 *  These are only shown to modern advanced clients and browsers, more details
 *  in `README.md`.
 */
const MainSections = ({current}) => {
  const details = {}
  const mainComponents = mainSectionList.map(({component, title, url}) => {
    const {key} = component
    details[key] = {title, url}
    return component
  })
  const childrenWithProps = React.Children.map(
    mainComponents,
    (Component) => {
      const {key} = Component
      const {title, url} = details[key]
      const isHome = (key === 'sectionHome')
      const isStored = hasSessionStorage() &&
        (root.sessionStorage.getItem(url) === 'open')
      const open = (key === current.key) || isHome || isStored
      return (
        <Section
          headline={isHome}
          id={key}
          key={key}
          open={open}
          title={title}
          url={url}
        >
          {Component}
        </Section>
      )
    }
  )

  return (
    <div>
      {childrenWithProps}
    </div>
  )
}

MainSections.propTypes = {
  current: React.PropTypes.element.isRequired,
}

export {getNextSection, MainSections as default}
