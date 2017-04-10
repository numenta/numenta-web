// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import Image from 'numenta-web-shared-components/lib/Image'
import LogoMark from 'numenta-web-shared-components/lib/LogoMark'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Section from 'numenta-web-shared-components/lib/Section'
import Strong from 'numenta-web-shared-components/lib/Strong'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import ImageClojure from './images/clojure.png'
import ImageCpp from './images/cpp.png'
import ImageJava from './images/java.png'
import ImagePython from './images/python.png'
import styles from './index.css'

const title = 'Implementations'


/**
 * Implementations standalone Page - React view component.
 */
const ImplementPage = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>

        <div className={styles.columns}>
          <div className={styles.aside}>
            <div className={styles.logomark}>
              <LogoMark />
            </div>
          </div>
          <div className={styles.content}>
            <Paragraph lead={true}>
              <TextLink to={links.in.htm}>
                Hierarchical Temporal Memory (HTM)
              </TextLink> {' '}
              is a theory of intelligence that can be implemented in most
              computer programming languages. Below are descriptions of several
              HTM implementations currently active within our community. For
              detailed descriptions of HTM algorithms, see our living text,{' '}
              <TextLink to={links.out.bami}>
                Biological and Machine Intelligence.
              </TextLink> {' '}
              It contains pseudocode for both the {' '}
              {/* eslint-disable max-len */}
              <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/BaMI-Spatial-Pooler.pdf">
                spatial pooling
              </TextLink> and {' '}
              {/* eslint-disable max-len */}
              <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/BaMI-Temporal-Memory.pdf">
                temporal memory
              </TextLink> algorithms (PDFs).
              {/* eslint-enable max-len */}
            </Paragraph>
            <Paragraph>
              <Strong>NuPIC</Strong>, or the {' '}
              <Strong>Numenta Platform for Intelligent Computing,</Strong> {' '}
              is an HTM implementation created by Numenta and open-sourced in
              June 2013. This codebase is the original HTM codebase, and is
              architected in a way that allows algorithmic experimentation in
              Python, but more performant versions of HTM algorithms in C++.
            </Paragraph>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="C++ Logo"
              border={false}
              respond="mw"
              shadow={false}
              src={ImageCpp}
            />
          </div>
          <div className={styles.content}>
            <Anchor name="nupic-core" />
            <SubTitle>NuPIC Core (C++)</SubTitle>
            <Paragraph>
              Our C++ codebase contains all HTM algorithms written in C++, and
              SWiG language bindings to Python. Language bindings to other
              environments should be added here.
            </Paragraph>
            <Paragraph>
              This codebase exposes the {' '}
              <TextLink to="https://numenta.github.io/nupic/guides/network.html">
                Network API,
              </TextLink> {' '}
              which is the primary low-level interface for creating HTM systems.
            </Paragraph>
            <div className={styles.promote}>
              <TextLink to="http://github.com/numenta/nupic.core">
                http://github.com/numenta/nupic.core
              </TextLink>
            </div>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Python Logo"
              border={false}
              respond="mw"
              shadow={false}
              src={ImagePython}
            />
          </div>
          <div className={styles.content}>
            <Anchor name="nupic-py" />
            <SubTitle>NuPIC (Python)</SubTitle>
            <Paragraph>
              The NuPIC Python codebase contains Python code implementations of
              HTM. Through this interface, users may specify whether their code
              runs Python algorithms or the faster C++ algorithms using the
              Python bindings provided in <Strong>nupic.core</Strong>.
            </Paragraph>
            <Paragraph>
              In addition to providing Python bindings to the {' '}
              <Strong>nupic.core</Strong> {' '}
              {/* eslint-disable max-len */}
              <TextLink to="https://numenta.github.io/nupic/guides/network.html">
                Network API,
              </TextLink> {' '}
              this codebase also includes a higher-level client API called the
              Online Prediction Framework (OPF), which is tuned towards
              experimentation with predictions, anomaly detection, and {' '}
              {/* eslint-disable max-len */}
              <TextLink to="https://numenta.github.io/nupic/guides/swarming/index.html">
                identifying optimal model parameters (swarming).
              </TextLink>
              {/* eslint-enable max-len */}
            </Paragraph>
            <div className={styles.promote}>
              <TextLink to="http://github.com/numenta/nupic">
                http://github.com/numenta/nupic
              </TextLink>
            </div>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Java Logo"
              border={false}
              respond="mw"
              shadow={false}
              src={ImageJava}
            />
          </div>
          <div className={styles.content}>
            <Anchor name="htm-java" />
            <SubTitle>HTM.Java</SubTitle>
            <Paragraph>
              While the copyright to <Strong>HTM.Java</Strong> was generously
              donated to Numenta by its {' '}
              <TextLink to="https://discourse.numenta.org/users/cogmission">
                author,
              </TextLink> {' '}
              it is a community-created and maintained port of NuPIC algorithms
              into Java. This Java library provides a similar experience to the
              NuPIC Network API, and has algorithmic parity with NuPIC.
            </Paragraph>
            <div className={styles.promote}>
              <TextLink to="http://github.com/numenta/htm.java">
                http://github.com/numenta/htm.java
              </TextLink>
            </div>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Clojure Logo"
              border={false}
              respond="mw"
              shadow={false}
              src={ImageClojure}
            />
          </div>
          <div className={styles.content}>
            <Anchor name="comportex" />
            <SubTitle>Comportex (Clojure)</SubTitle>
            <Paragraph>
              Comportex is an implementation of HTM as a Clojure library. It is
              not a port of NuPIC, it is a separate implementation based
              initially on the Numenta "CLA white paper" but significantly
              evolved.
            </Paragraph>
            <div className={styles.promote}>
              <TextLink to="https://github.com/htm-community/comportex">
                https://github.com/htm-community/comportex
              </TextLink>
            </div>
          </div>
        </div>

      </Section>
    </article>
  )
}

ImplementPage.contextTypes = {
  config: React.PropTypes.object,
}

export default ImplementPage
