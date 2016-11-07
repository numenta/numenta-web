// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Image from '../../../components/Image'
import Paragraph from '../../../components/Paragraph'
import TextLink from '../../../components/TextLink'

import ImageBrain from './images/brain.svg'
import styles from './index.css'


/**
 * Neuroscience Research MainSection and page content - React view component.
 */
const SectionNeuroscience = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.brain}>
            <Image
              alt="Stylized Brain Artwork"
              respond="mw"
              shadow={false}
              src={ImageBrain}
            />
          </div>
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Reverse engineering the neocortex to figure out how the brain works
            is one of humanity's grand scientific challenges. We are fortunate
            to be living in an era when neuroscience techniques are advancing at
            an amazing pace, giving rise to a wealth of data on everything from
            synapses, to neurons, to entire cortical regions. Our research team
            focuses on theory. We work with experimentalists and published
            results to derive an understanding of what the neocortex does and
            how the detailed architecture of the neocortex implements this. We
            test our theories via simulation, mathematical analysis, and
            experimental partnerships. While there are many experimental
            neuroscience laboratories, Numenta is unique in its focus on
            large-scale cortical theory and simulation.
          </Paragraph>
          <Paragraph>
            Although there is much to do, we have made significant progress on
            several key aspects of cortical theory. Our first focus was on how
            the neocortex learns the structure in streams of sensory data. This
            led to a comprehensive theory of why neurons in the neocortex have
            thousands of synapses and active dendrites, and why they are
            arranged in minicolumns as observed in the neocortex. We have taken
            this theoretical advance and applied it to commercially valuable
            problems in anomaly detection and prediction in streaming data. To
            further that goal we created a {' '}
            <TextLink to={links.in.nab}>
              benchmark for anomaly detection in streaming data
            </TextLink> {' '}
            that for the first time provided a means for comparing the results
            of different algorithms for anomaly detection. Our current research
            focus is developing a comprehensive theory of how the neocortex
            learns through movement — what is often called “sensorimotor”
            learning.
          </Paragraph>
          <Paragraph>
            We document our research in several ways, including {' '}
            <TextLink to={links.out.papers}>
              peer-reviewed journal papers,
            </TextLink> {' '}
            conference proceedings, research reports, {' '}
            <TextLink to={links.in.events}>
              invited talks,
            </TextLink> {' '}
            and a living book titled {' '}
            <TextLink to={links.in.bami}>
              BAMI
            </TextLink> {' '}
            (for biological and machine intelligence). In addition, we place all
            of our software, from our commercial grade applications to our daily
            research commits, in our open source project, {' '}
            <TextLink to={links.out.org}>
              NuPIC.
            </TextLink> {' '}
            We strive to be completely open in everything we do. We welcome
            collaborations with both neuroscientists and machine learning
            researchers.
          </Paragraph>
        </div>
      </div>
    </article>
  )
}

SectionNeuroscience.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionNeuroscience
