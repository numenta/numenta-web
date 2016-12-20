// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import Image from 'numenta-web-shared-components/lib/Image'
import List from 'numenta-web-shared-components/lib/List'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import LogoMark from 'numenta-web-shared-components/lib/LogoMark'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Section from 'numenta-web-shared-components/lib/Section'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import ImageEvolve from './images/evolve.png'
import ImageNumenta from './images/numenta.png'
import ImageRni from './images/rni.png'
import styles from './index.css'

const title = 'HTM History'


/**
 * HTM History page - React view component.
 */
const HistoryPage = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>

        <div className={styles.columns}>
          <div className={styles.aside}>
            <div className={styles.narrow}>
              <LogoMark />
            </div>
          </div>
          <div className={styles.content}>
            <Paragraph lead={true}>
              HTM technology has been evolving for well over a decade. This page
              describes the evolution of HTM theory starting from a research
              institute and culminating in freely available {' '}
              <TextLink to={links.in.code}>
                open source code repositories.
              </TextLink>
            </Paragraph>
          </div>
        </div>

        <Anchor name="redwood-neuroscience-institute" />
        <SubTitle>Redwood Neuroscience Institute</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Redwood Neuroscience Institute"
              border={true}
              respond="mw"
              shadow={true}
              src={ImageRni}
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              The Redwood Center for Theoretical Neuroscience was established in
              July 2005, when the Redwood Neuroscience Institute (RNI) was
              gifted to UC Berkeley. RNI was a private, non-profit research
              institute located in Menlo Park, {' '}
              <TextLink to="http://redwood.berkeley.edu/wiki/History">
                founded by Jeff Hawkins in April 2002.
              </TextLink> {' '}
              The goal of RNI
              was to develop a theoretical framework for the thalamo-cortical
              system. Its staff consisted of principal investigators, postdocs,
              and students who worked closely together and shared this common
              vision. It fostered a vibrant intellectual environment that lead
              to the development of many new ideas.
            </Paragraph>

            <SubTitle level={3}>Accomplishments of RNI:</SubTitle>
            {/* eslint-disable max-len */}
            <List marker="disc">
              <ListItem>
                The book {' '}
                <TextLink to="http://numenta.com/papers-videos-and-more/resources/on-intelligence/">
                  On Intelligence.
                </TextLink> {' '}
                (Hawkins in collaboration with Sandra Blakeslee, NY Times)
              </ListItem>
              <ListItem>
                Development of the Hierarchical Temporal Memory (HTM) model of
                cerebral cortex, which formed the basis of startup Numenta.
                (George/Hawkins)
              </ListItem>
              <ListItem>
                Development of a novel sparse coding algorithm that accounts for
                the diversity of receptive fields found in cortical area V1.
                (Sommer in collaboration with Martin Rehn, KTH Stockholm)
              </ListItem>
              <ListItem>
                Development of an information-maximization theory of spike
                timing dependent plasticity (STDP). (Bell, in collaboration with
                Lucas Parra, CUNY)
              </ListItem>
              <ListItem>
                Analysis of the conditions under which dendritic inputs combine
                super-linearly within dendrites. (Lauritzen)
              </ListItem>
              <ListItem>
                Development of a theory of predictive coding in the
                thalamo-cortical loop. (Softky)
              </ListItem>
              <ListItem>
                Development of population coding models based on random
                distributed representation in high-dimensional spaces. (Kanerva)
              </ListItem>
            </List>
            {/* eslint-enable max-len */}
          </div>
        </div>

        <Anchor name="numenta" />
        <SubTitle>Numenta</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Numenta Office"
              border={true}
              respond="mw"
              shadow={true}
              src={ImageNumenta}
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              Numenta was founded in 2005 by Jeff Hawkins, Dileep George and
              Donna Dubinsky. Hawkins is the author (with Sandra Blakeslee) of
              On Intelligence, which describes the theory of the neocortex used
              as the basis for Numenta's technology. Numenta is the third
              collaborative venture for Hawkins and Dubinsky who were
              co-founders of Palm Computing and Handspring.
            </Paragraph>
            <Paragraph>
              Numenta introduced its first Research Release of the Numenta
              Platform for Intelligent Computing (NuPIC), including
              first-generation learning algorithms, to the developer community
              in March 2007. In June 2009, the company released version 1.7 of
              NuPIC along with a Vision Toolkit that allows non-programmers to
              experiment with creating, training and doing inference on HTM
              networks with image classification.
            </Paragraph>
            <Paragraph>
              After a complete rewrite of the NuPIC codebase, Numenta {' '}
              <TextLink to="/blog/2013/06/03/introducing-nupic/">
                made NuPIC open source
              </TextLink> {' '}
              in June 2013.
            </Paragraph>
          </div>
        </div>

        <Anchor name="evolution-of-htm" />
        <SubTitle>Evolution of HTM</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="HTM Evolution"
              border={true}
              respond="mw"
              shadow={true}
              src={ImageEvolve}
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              Numenta's first generation of HTM algorithms was internally called
              "Zeta 1" and was not open source. This product was focused on
              vision, and it contained hierarchy and invariance. It did not have
              Sparse Distributed Representations, sequence memory, or
              predictions. It primarily did image classification and contained
              an "image toolkit". The hierarchy worked quite well, and we came
              away from this development with a strong understanding of what
              hierarchy was, how it worked, and what was required for it to
              work. Commercial products were developed with this software by a
              company called Vitamin D, which could call out human figures in
              live video feeds and differentiate them from other moving objects.
              This is still in production software today.
            </Paragraph>
            <Paragraph>
              The only thing on Jeff's list of requirements fully achieved by
              Zeta 1 was "hierarchy and invariance". Numenta pulled away to
              focus on the elements of intelligence that Zeta 1 did not address.
              Zeta 1 was not nearly as biologically plausible as our current
              algorithms, and it became clear that we were moving down the wrong
              path if we wanted to meet all the requirements in Jeff's list.
            </Paragraph>

            <SubTitle level={3}>HTM Today</SubTitle>
            <Paragraph>
              Numenta's 2nd generation of HTM algorithms are pretty much what is
              defined within the {' '}
              <TextLink to="http://numenta.org/htm-white-paper.html">
                CLA White Paper
              </TextLink> {' '}
              and what was {' '}
              {/* eslint-disable max-len */}
              <TextLink to="https://github.com/numenta/nupic/tree/9b0b18ed9161cbc9dad27c7fbbb2b2286e8718cb">
                introduced as an open source project
              </TextLink> {' '}
              {/* eslint-enable max-len */}
              in June 2013. It does not contain hierarchy/invariance, but it was
              built with a much stricter adherence to biological constructs and
              is much closer to the neuroscience than Zeta 1. This includes the
              elements of "sequences and prediction" and "continuous learning".
              Our plan was to focus on developing one region of the neocortex
              (without hierarchy) in a way that was as close to the biology as
              possible, and always ensuring that hierarchy could be added when
              the time was right.
            </Paragraph>

            <SubTitle level={3}>Future of HTM</SubTitle>
            <Paragraph>
              We consider the current state of {' '}
              <TextLink to="https://github.com/numenta/nupic">
                NuPIC
              </TextLink> {' '}
              and {' '}
              <TextLink to="https://github.com/numenta/nupic.research">
                nupic.research
              </TextLink> {' '}
              to be our 3rd generation of algorithms. While the switch from Zeta
              1 to the current NuPIC codebase was a huge shift and basically a
              reconstruction of all parts of HTM/CLA, the 3rd generation is
              being built upon our current open source codebase. So we won't be
              throwing away anything in order to add the new capabilities we're
              planning in <em>nupic.research</em>.
            </Paragraph>
            <Paragraph>
              While work on our 3rd generation of HTM code is still undergoing,
              we are hoping to achieve the following:
            </Paragraph>
            <List marker="disc">
              <ListItem>Common Cortical Algorithm</ListItem>
              <ListItem>Hierarchy and Invariance</ListItem>
              <ListItem>Sequence and Prediction</ListItem>
              <ListItem>Continuous Learning</ListItem>
              <ListItem>Feedback</ListItem>
              <ListItem>Behavior</ListItem>
              <ListItem>Attention</ListItem>
              <ListItem>Laminar Structure</ListItem>
            </List>
          </div>
        </div>

      </Section>
    </article>
  )
}

HistoryPage.contextTypes = {
  config: React.PropTypes.object,
}

export default HistoryPage
