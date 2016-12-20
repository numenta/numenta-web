// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import Image from 'numenta-web-shared-components/lib/Image'
import ImageLink from 'numenta-web-shared-components/lib/ImageLink'
import List from 'numenta-web-shared-components/lib/List'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Video from 'numenta-web-shared-components/lib/Video'

import ImageHtmStocks from './images/htm-for-stocks.png'
import ImageHtmStudio from './images/htm-studio.png'
import ImageGeo from './images/geo.png'
import ImageGrokIt from './images/grok.png'
import ImageNlp from './images/nlp.png'
import ImageRogue from './images/intrude.png'
import ImageVideoApps from './images/video-apps.png'
import styles from './index.css'


/**
 * Applications MainSection and page content - React view component.
 */
const SectionApplications = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Video
            image={ImageVideoApps}
            respond="mw"
            time="02:32"
            title="Intro to our Applications"
            type="youtube"
            videoId="9jWmS62MWx8"
          />
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            While Numenta does not build commercial applications, we have
            created example HTM applications in several fields such as
            monitoring stock performance, detecting unusual human behavior, and
            finding patterns in geospatial data. Additionally, our partners have
            created commercial applications in the field of monitoring IT
            infrastructure and understanding natural language. We are confident
            that many additional applications will be created in the future.
          </Paragraph>

          <Paragraph>
            HTM is well suited for applications that have the following
            characteristics:
          </Paragraph>
          <List marker="disc">
            <ListItem>
              Data flowing through time: the data can be in the form of
              numbers, dates, text, or GPS points
            </ListItem>
            <ListItem>
              A data sampling rate from once per minute to once per hour, with
              the “sweet spot” being between once per minute and once every
              five minutes (faster velocity data can be aggregated or sampled
              as well)
            </ListItem>
            <ListItem>
              Data that has inherent structure, i.e. not entirely random
            </ListItem>
            <ListItem>
              Many models are required rather than one large model
            </ListItem>
            <ListItem>
              Focus of the application is prediction or anomaly detection
            </ListItem>
          </List>

          <Paragraph>
            The following applications are examples that fit these
            characteristics:
          </Paragraph>
          <List marker="disc">
            <ListItem>
              Highlighting anomalies in the behavior of moving objects, such as
              tracking a fleet’s movements on a truck by truck basis
            </ListItem>
            <ListItem>
              Understanding if human behavior is normal or abnormal on a
              securities trading floor
            </ListItem>
            <ListItem>
              Predicting energy usage for a utility on a customer by customer
              basis
            </ListItem>
            <ListItem>
              Predicting failure in a complex machine based on data from many
              sensors
            </ListItem>
          </List>
          <Paragraph>
            In order to demonstrate these capabilities, we have created
            several tools and example applications.
          </Paragraph>
        </div>
      </div>

      <Anchor name="htmstudio" />
      <SubTitle>HTM Studio for Anomaly Detection</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <ImageLink to={links.in.htmstudio}>
            <Image
              alt="HTM Studio screenshot"
              border={true}
              respond="mw"
              src={ImageHtmStudio}
            />
          </ImageLink>
        </div>
        <div className={styles.content}>
          <Paragraph>
            HTM Studio for Anomaly Detection is a tool that makes it easy to
            experiment with using HTM to detect anomalies in your own scalar
            data. Designed for the business-focused user, this tool makes it
            easy to develop a proof of concept with HTM technology without
            doing any coding.
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={links.in.htmstudio}>
                More Information
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to={`${links.in.htmstudio}#feedback`}>
                Register to Give Feedback
              </TextLink>
            </ListItem>
          </List>
        </div>
      </div>

      <Anchor name="htmstocks" />
      <SubTitle>HTM for Stocks</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <ImageLink to={links.in.htmstocks}>
            <Image
              alt="HTM for Stocks screenshot"
              respond="mw"
              src={ImageHtmStocks}
            />
          </ImageLink>
        </div>
        <div className={styles.content}>
          <Paragraph>
            HTM for Stocks is an example application that detects anomalies in
            publicly traded companies. It continuously models stock price,
            stock volume, and Twitter volume for top publicly traded companies
            and alerts you in real time when something unusual is happening.
            HTM for Stocks is available for free via the {' '}
            {/* eslint-disable max-len */}
            <TextLink to="https://itunes.apple.com/us/app/htm-for-stocks/id1049429350?mt=8">
              App Store
            </TextLink>
            {' '} or {' '}
            <TextLink to="https://play.google.com/store/apps/details?id=com.numenta.taurus">
              Google Play Store.
            </TextLink>
            {/* eslint-enable max-len */}
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={links.in.htmstocks}>
                More Information
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to={`${links.in.htmstocks}#get`}>
                Register to Give Feedback
              </TextLink>
            </ListItem>
          </List>
        </div>
      </div>

      <Anchor name="grokit" />
      <SubTitle>Grok</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <ImageLink to={links.out.grok}>
            <Image
              alt="Grok for IT Analytics screenshot"
              respond="mw"
              src={ImageGrokIt}
            />
          </ImageLink>
        </div>
        <div className={styles.content}>
          <Paragraph>
            Grok is a commercial application offered by one of our strategic
            partners that detects anomalies in servers and applications. It
            learns continuously, automatically discovers time-based patterns in
            data, and generalizes from experience.
          </Paragraph>
          <Paragraph>
            Grok is now available at {' '}
            <TextLink to={links.out.grok}>
              {links.out.grok}.
            </TextLink>
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={`${links.out.grok}/#pricing`}>
                Sign Up
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to={links.out.grok}>
                More Information
              </TextLink>
            </ListItem>
          </List>
        </div>
      </div>

      <Anchor name="rogue" />
      <SubTitle>Rogue Behavior Detection</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <ImageLink to={links.out.rogue}>
            <Image
              alt="Rogue Behavior Detection screenshot"
              respond="mw"
              src={ImageRogue}
            />
          </ImageLink>
        </div>
        <div className={styles.content}>
          <Paragraph>
            This example application models normal behavior of individuals by
            detecting changes in behavior, such as unusual use of files. You
            can experiment with this application using your own data by
            downloading our sample application code below.
          </Paragraph>
          {/* eslint-disable max-len */}
          <List marker="disc">
            <ListItem>
              <TextLink to="/assets/pdf/whitepapers/Rogue%20Behavior%20Detection%20White%20Paper.pdf">
                Whitepaper: HTM for Rogue Behavior
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to={links.out.rogue}>
                Download Application Code
              </TextLink>
            </ListItem>
          </List>
          {/* eslint-disable max-len */}
        </div>
      </div>

      <Anchor name="geo" />
      <SubTitle>Geospatial Tracking</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <ImageLink to={links.out.geo}>
            <Image
              alt="Geospatial Tracking screenshot"
              border={true}
              respond="mw"
              src={ImageGeo}
            />
          </ImageLink>
        </div>
        <div className={styles.content}>
          <Paragraph>
            The example geospatial tracking application detects anomalies in
            the movement of people, objects, or material using speed and
            location data. Use this application to enable logistics
            optimization. You can experiment with this application using your
            own data by downloading our sample application code below.
          </Paragraph>
          {/* eslint-disable max-len */}
          <List marker="disc">
            <ListItem>
              <TextLink to="/assets/pdf/whitepapers/Geospatial%20Tracking%20White%20Paper.pdf">
                Whitepaper: HTM for Geospatial Tracking
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to={links.out.geo}>
                Download Application Code
              </TextLink>
            </ListItem>
          </List>
          {/* eslint-enable max-len */}
        </div>
      </div>

      <Anchor name="nlp" />
      <SubTitle>Natural Language Processing</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <ImageLink to={links.out.cortical}>
            <Image
              alt="Natural Language Processing screenshot"
              respond="mw"
              src={ImageNlp}
            />
          </ImageLink>
        </div>
        <div className={styles.content}>
          <Paragraph>
            One of our partners, {' '}
            <TextLink to={links.out.cortical}>
              Cortical.io,
            </TextLink> {' '}
            has used Numenta’s technology to develop and commercialize Natural
            Language Processing Solutions. By representing language with highly
            efficient semantic fingerprints, Cortical.io has built the first
            semantic engine that can analyze text in real time, in any language.
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={links.out.cortical}>
                More Information
              </TextLink>
            </ListItem>
          </List>
        </div>
      </div>
    </article>
  )
}

SectionApplications.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionApplications
