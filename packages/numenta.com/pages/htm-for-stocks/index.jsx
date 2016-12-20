// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import classNames from 'classnames'
import Helmet from 'react-helmet'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import Button from 'numenta-web-shared-components/lib/Button'
import Form from 'numenta-web-shared-components/lib/Form'
import FormInput from 'numenta-web-shared-components/lib/FormInput'
import FormLabel from 'numenta-web-shared-components/lib/FormLabel'
import FormRow from 'numenta-web-shared-components/lib/FormRow'
import Image from 'numenta-web-shared-components/lib/Image'
import ImageLink from 'numenta-web-shared-components/lib/ImageLink'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Section from 'numenta-web-shared-components/lib/Section'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import ImageFeature1 from './images/feature1.png'
import ImageFeature2 from './images/feature2.png'
import ImageFeature3 from './images/feature3.png'
import ImageHandheld from './images/handheld.png'
import ImageRaw1 from './images/raw1.png'
import ImageRaw2 from './images/raw2.png'
import ImageStoreApp from './images/app-store-button.png'
import ImageStorePlay from './images/play-store-button.png'
import ImageUse1 from './images/use1.png'
import ImageUse2 from './images/use2.png'
import ImageUse3 from './images/use3.png'
import ImageUse4 from './images/use4.png'
import styles from './index.css'

const title = 'HTM for Stocks'


/**
 * HTM for Stocks page - React view component.
 */
const HtmStocksPage = (props, {config}) => {
  const {contact, links} = config

  return (
    <article>
      <Helmet title={title} />
      <Section
        headline={true}
        open={true}
        title={title}
      >
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Hand using mobile device"
              respond="mw"
              shadow={false}
              src={ImageHandheld}
            />
          </div>
          <div className={styles.content}>
            <SubTitle level={3}>
              Find anomalies in publicly traded stocks using trading and
              Twitter data.
            </SubTitle>
            <Paragraph lead={true}>
              HTM for Stocks is an example HTM application that continually
              monitors hundreds of publicly traded companies and alerts you if
              something unusual is happening to any of them. HTM for Stocks uses
              {' '}
              <TextLink to={links.in.technology}>
                HTM machine intelligence algorithms
              </TextLink> {' '}
              to model stock price, stock volume, and Twitter data related to
              200 of the largest publicly traded companies. Companies monitored
              include Apple, Google, Amazon, and Starbucks. HTM for Stocks is a
              mobile application that runs on both iOS and Android-based phones.
            </Paragraph>
            <Paragraph>
              HTM for Stocks is an example application and is available for
              free. We invite you to {' '}
              <TextLink to={`${links.in.htmstocks}#get`}>
                register to give feedback
              </TextLink> {' '}
              or {' '}
              <TextLink to={`mailto:${contact.email.feedback}`}>
                send us an email.
              </TextLink>
            </Paragraph>
            <Paragraph>
              Numenta has made the source code for HTM for Stocks available
              alongside the {' '}
              <TextLink to={links.out.org}>
                NuPIC open source project
              </TextLink> {' '}
              to encourage others to create new and derivative products. {' '}
              <TextLink to={`${links.in.careers}#contact`}>
                Contact us
              </TextLink> {' '}
              with questions or interest. {' '}
              <TextLink to="https://github.com/numenta/numenta-apps">
                Review the source code.
              </TextLink>
            </Paragraph>
          </div>
        </div>

        <Anchor name="features" />
        <SubTitle>
          Features
        </SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="HTM for Stocks feature #1"
              border={true}
              respond="mw"
              src={ImageFeature1}
            />
          </div>
          <div className={styles.content}>
            <SubTitle level={3}>
              Time-based Pattern Detection
            </SubTitle>
            <Paragraph>
              Automatically analyzes time-based patterns on a company by company
              basis to identify anomalies. The HTM algorithm ensures that
              reported anomalies are rare (avoiding false positives), and that
              real anomalies can be detected, even if humans can’t see them
              (avoiding false negatives).
            </Paragraph>
            <SubTitle level={3}>
              Most Anomalous Companies Highlighted
            </SubTitle>
            <Paragraph>
              Companies are listed in order of most anomalous in the past 24
              hours so everything the user wants to see is usually visible on
              one page.
            </Paragraph>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="HTM for Stocks feature #2"
              border={true}
              respond="mw"
              src={ImageFeature2}
            />
          </div>
          <div className={styles.content}>
            <SubTitle level={3}>
              Continuous Learning
            </SubTitle>
            <Paragraph>
              Learns with each data point and adapts to changes over time.
            </Paragraph>
            <SubTitle level={3}>
              Root-cause analysis
            </SubTitle>
            <Paragraph>
              Displays tweets around the same time as anomalies so you can
              easily see what people are saying and why something unusual is
              happening.
            </Paragraph>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="HTM for Stocks feature #3"
              border={true}
              respond="mw"
              src={ImageFeature3}
            />
          </div>
          <div className={styles.content}>
            <SubTitle level={3}>
              Notifications
            </SubTitle>
            <Paragraph>
              Sends alerts when anomalies occur on your favorite companies.
            </Paragraph>
            <SubTitle level={3}>
              iOS and Android Mobile App
            </SubTitle>
            <Paragraph>
              Presents output in a friendly, mobile user interface.
            </Paragraph>
          </div>
        </div>

        <Anchor name="how" />
        <SubTitle>
          How Does It Work?
        </SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="HTM for Stocks app screenshot #1"
              border={true}
              respond="mw"
              src={ImageRaw1}
            />
          </div>
          <div className={styles.content}>
            <SubTitle level={3}>
              Ingests real-time stock and Twitter data
            </SubTitle>
            <Paragraph>
              For each monitored company, data is collected every five minutes
              for stock price, stock volume and Twitter volume.  Actual data
              charts can be viewed in the application.
            </Paragraph>
            <SubTitle level={3}>
              Models build automatically
            </SubTitle>
            <Paragraph>
              Models are automatically built and refined for each data stream.
              No data scientists are required!
            </Paragraph>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="HTM for Stocks app screenshot #2"
              border={true}
              respond="mw"
              src={ImageRaw2}
            />
          </div>
          <div className={styles.content}>
            <SubTitle level={3}>
              Anomalies are based on deviation from recent performance
            </SubTitle>
            <Paragraph>
              Each company is different. HTM models report anomalies when
              current behavior deviates from recent behavior.
            </Paragraph>
          </div>
        </div>

        <Anchor name="uses" />
        <SubTitle>
          Sample Use Cases
        </SubTitle>
        <div className={classNames(styles.columns, styles.pad)}>
          <div className={styles.column}>
            <Image
              alt="HTM for Stocks use case #1"
              border={true}
              respond="w"
              src={ImageUse1}
            />
            <Paragraph>
              CEO wants to be alerted about unusual activity with competitors.
            </Paragraph>
          </div>
          <div className={styles.column}>
            <Image
              alt="HTM for Stocks use case #2"
              border={true}
              respond="w"
              src={ImageUse2}
            />
            <Paragraph>
              Sales Rep monitors companies in her territory to harvest
              new information for sales calls.
            </Paragraph>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <Image
              alt="HTM for Stocks use case #3"
              border={true}
              respond="w"
              src={ImageUse3}
            />
            <Paragraph>
              Marketing Executive aims to understand product announcement
              chatter.
            </Paragraph>
          </div>
          <div className={styles.column}>
            <Image
              alt="HTM for Stocks use case #4"
              border={true}
              respond="w"
              src={ImageUse4}
            />
            <Paragraph>
              Financial market followers track companies of interest, noting
              when anomalies occur.
            </Paragraph>
          </div>
        </div>

        <Anchor name="get" />
        <SubTitle>
          Get App and Register
        </SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            {/* eslint-disable max-len */}
            <div className={styles.download}>
              <ImageLink to="https://itunes.apple.com/us/app/htm-for-stocks/id1049429350?mt=8">
                <Image
                  alt="HTM for Stocks on Apple iOS App Store"
                  center={true}
                  respond="mw"
                  shadow={false}
                  src={ImageStoreApp}
                />
              </ImageLink>
              <div>
                iOS (version 8.0 or higher)
              </div>
            </div>
            <div className={styles.download}>
              <ImageLink to="https://play.google.com/store/apps/details?id=com.numenta.taurus">
                <Image
                  alt="HTM for Stocks on Google Android Play Store"
                  center={true}
                  respond="mw"
                  shadow={false}
                  src={ImageStorePlay}
                />
              </ImageLink>
              <div>
                Android phone (version 4.1 or higher)
              </div>
            </div>
            {/* eslint-enable max-len */}
          </div>
          <div className={styles.content}>
            <Paragraph>
              We value your participation and encourage you to register and
              provide feedback. This is optional registration so we can contact
              you for future discussion.
            </Paragraph>
            <Form
              action="https://numenta.wufoo.com/forms/z1v02iwe1pywsrf/#public"
            >
              <FormRow>
                <FormLabel for="Field5">
                  Name
                </FormLabel>
                <FormInput
                  name="Field5"
                  placeholder="First Lastname"
                  type="text"
                />
              </FormRow>
              <FormRow>
                <FormLabel for="Field6">
                  Email
                </FormLabel>
                <FormInput
                  name="Field6"
                  placeholder="name@company.com"
                  stretch="medium"
                  type="email"
                />
              </FormRow>
              <FormRow>
                <FormLabel for="Field7">
                  Phone
                </FormLabel>
                <FormInput
                  name="Field7"
                  placeholder="123-456-7890"
                  stretch="small"
                  type="tel"
                />
              </FormRow>
              <FormRow>
                <FormLabel>&nbsp;</FormLabel>
                <Button theme="primary" type="submit">
                  Submit
                </Button>
              </FormRow>
              <FormInput
                name="idstamp"
                type="hidden"
                value="QtcKYnectCUEIoQBldg0abE8A+/1vmIblmzSzfMUVTM="
              />
            </Form>

          </div>
        </div>
      </Section>
    </article>
  )
}

HtmStocksPage.contextTypes = {
  config: React.PropTypes.object,
}

export default HtmStocksPage
