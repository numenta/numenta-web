// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import findIndex from 'lodash/findIndex'
import React from 'react'
import root from 'window-or-global'

import {hasSessionStorage} from 'numenta-web-shared-utils/lib/client'
import Section from 'numenta-web-shared-components/lib/Section'

import SectionCode from './code/_Section'
import SectionCommunity from './community/_Section'
import SectionHome from './_Section'
import SectionHtm from './hierarchical-temporal-memory/_Section'
import SectionResearch from './research-and-publications/_Section'

const mainSectionList = [
  {
    component: <SectionHome key="sectionHome" />,
    title: 'Bridging the Gap Between Neuroscience and AI',
    url: '/',
  },
  {
    component: <SectionResearch key="sectionResearch" />,
    title: 'Research & Publications',
    url: '/research-and-publications/',
  },
  {
    component: <SectionHtm key="sectionHtm" />,
    title: 'Hierarchical Temporal Memory',
    url: '/hierarchical-temporal-memory/',
  },
  {
    component: <SectionCommunity key="sectionCommunity" />,
    title: 'Community',
    url: '/community/',
  },
  {
    component: <SectionCode key="sectionCode" />,
    title: 'Code',
    url: '/code/',
  },
]


/**
 * Gets the next MainSection object based on the one given
 * @param {Object} current - Current Section object trying to get next of
 * @public
 * @returns {Object|null} - Next Section object or null
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
 * Main Sections of site (Single-page app Homepage for advanced clients,
 *  individual pages for older clients), React view component.
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
