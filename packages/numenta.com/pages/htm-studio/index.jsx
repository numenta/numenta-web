// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import camelCase from 'lodash/camelCase'
import classNames from 'classnames'
import Helmet from 'react-helmet'
import IconBarChart from 'react-icons/lib/fa/bar-chart'
import IconBullseye from 'react-icons/lib/fa/bullseye'
import IconCubes from 'react-icons/lib/fa/cubes'
import IconFolder from 'react-icons/lib/fa/folder-open'
import IconLock from 'react-icons/lib/fa/lock'
import IconQuestion from 'react-icons/lib/fa/question-circle'
import Modal from 'react-modal'
import platform from 'platform'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import Button from 'numenta-web-shared-components/lib/Button'
import ButtonLink from 'numenta-web-shared-components/lib/ButtonLink'
import Form from 'numenta-web-shared-components/lib/Form'
import FormCheckbox from 'numenta-web-shared-components/lib/FormCheckbox'
import FormInput from 'numenta-web-shared-components/lib/FormInput'
import FormLabel from 'numenta-web-shared-components/lib/FormLabel'
import FormRow from 'numenta-web-shared-components/lib/FormRow'
import FormTextArea from 'numenta-web-shared-components/lib/FormTextArea'
import {getBrowserWidth} from 'numenta-web-shared-utils/lib/client'
import {getModalWidth} from 'numenta-web-shared-utils/lib/shared'
import Image from 'numenta-web-shared-components/lib/Image'
import List from 'numenta-web-shared-components/lib/List'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import Markdown from 'numenta-web-shared-components/lib/Markdown'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Section from 'numenta-web-shared-components/lib/Section'
import Strong from 'numenta-web-shared-components/lib/Strong'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Video from 'numenta-web-shared-components/lib/Video'

import ImageUse1 from './images/use1.png'
import ImageUse2 from './images/use2.png'
import ImageUse3 from './images/use3.png'
import ImageUse4 from './images/use4.png'
import ImageVideoDatasource from './images/video-datasource.png'
import ImageVideoDatetime from './images/video-datetime.png'
import ImageVideoIntro from './images/charts.png'
import ImageVideoWalkthru from './images/video-walkthru.png'
import modalStyles from './_style-modal'
import styles from './index.css'
import Terms from './terms.md'

const title = 'HTM Studio'
const URL_OSX = 'http://public.numenta.com/releases/htm-studio/darwin/HTM%20Studio-1.0.0.dmg'  // eslint-disable-line max-len
const URL_WIN = 'http://public.numenta.com/releases/htm-studio/win/HTM%20Studio%20Setup%201.0.0.exe'  // eslint-disable-line max-len

const sortFaqs = (a, b) => {
  if (a.data.sort > b.data.sort) return 1
  if (a.data.sort < b.data.sort) return -1
  return 0
}


/**
 * HTM Studio page - React view component.
 */
class HtmStudioPage extends React.Component {

  static contextTypes = {
    config: React.PropTypes.object,
    route: React.PropTypes.object,
  }

  state = {
    accepted: false,  // has download terms acceptance checkbox been checked?
    terms: false,     // is the terms modal showing?
    warning: false,   // is the user seeing check-acceptance-checkbox warning?
  }

  _startDownload(event) {
    const {accepted} = this.state
    if (!accepted) {
      event.preventDefault()
      event.stopPropagation()
      this.setState({warning: true})
    }
  }

  _toggleAcceptance() {
    const {accepted} = this.state
    const newState = {accepted: !accepted}
    if (newState.accepted) {
      newState.warning = false
    }
    this.setState(newState)
  }

  _toggleTerms(event) {
    const {terms} = this.state
    if (event && !terms) {
      event.preventDefault()
      event.stopPropagation()
    }
    this.setState({terms: !terms})
  }

  render() {
    const {config, route} = this.context
    const {accepted, terms, warning} = this.state
    const {links} = config
    const {pages} = route
    const {os} = platform
    const modalWidth = getModalWidth(getBrowserWidth(), {copy: true})
    const warningClasses = [styles.row, styles.error]
    const family = camelCase(os.family).toLowerCase()
    const downloadLink = (family && family.match(/win/)) ? URL_WIN : URL_OSX
    const faqs = pages.filter(({file}) => (
      (file.path.match(/^htm-studio\/faq\/.*\.md/))
    ))
    const faq = faqs.sort(sortFaqs).map(({data, file}) => (
      <div key={file.stem}>
        <Anchor name={file.stem} />
        <Strong>
          {data.title}
        </Strong>
        <Markdown>
          <div
            className={styles.faqItem}
            dangerouslySetInnerHTML={{__html: data.body}}
          />
        </Markdown>
      </div>
    ))
    const TermsLink = (
      <TextLink
        onClick={(event) => this._toggleTerms(event)}
        to={`${links.in.htmstudio}terms/`}
      >
        Terms and Conditions
      </TextLink>
    )
    let termsModal = null

    modalStyles.content.width = modalWidth

    termsModal = (
      <Modal
        contentLabel={Terms.title}
        isOpen={terms}
        onRequestClose={() => this._toggleTerms()}
        style={modalStyles}
      >
        <div className={styles.modal}>
          <Markdown>
            <SubTitle>{Terms.title}</SubTitle>
            <div dangerouslySetInnerHTML={{__html: Terms.body}} />
            <div className={styles.close}>
              <Button onClick={() => this._toggleTerms()}>
                Close
              </Button>
            </div>
          </Markdown>
        </div>
      </Modal>
    )

    if (!warning) {
      warningClasses.push(styles.hide)
    }

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
              <Video
                image={ImageVideoIntro}
                respond="mw"
                time="01:37"
                title="HTM Studio Introduction"
                type="youtube"
                videoId="Nqoruj4eCb8"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.tagline}>
                <SubTitle level={3}>
                    Find Real-Time Anomalies in your Streaming Data
                </SubTitle>
              </div>
              <Paragraph lead={true}>
                HTM Studio allows you to test whether our Hierarchical Temporal
                Memory (HTM) algorithms will find anomalies in your data. With
                just one click, you can uncover anomalies other techniques
                cannot find in your numeric, time-series data, in minutes.
              </Paragraph>
              <div className={styles.download}>
                <Form>
                  <div className={styles.row}>
                    <FormCheckbox
                      name="terms"
                      onClick={() => this._toggleAcceptance()}
                    />
                    <span className={styles.agree}>
                      I agree to the {' '}
                      {TermsLink}
                    </span>
                  </div>
                  <div className={classNames(...warningClasses)}>
                    Please agree to the {' '}
                    {TermsLink} {' '}
                    above before downloading.
                  </div>
                  <div>
                    <ButtonLink
                      disabled={!accepted}
                      onClick={(event) => this._startDownload(event)}
                      theme="primary"
                      to={downloadLink}
                    >
                      Download HTM Studio
                    </ButtonLink>
                  </div>
                </Form>
              </div>
              <div className={styles.notes}>
                <List copy={false} marker="disc">
                  <ListItem>
                    Available on Desktop only, for Mac OS/X and Windows (64 bit
                    versions).
                  </ListItem>
                  <ListItem>
                    Installation on Windows will take several minutes.
                  </ListItem>
                  <ListItem>
                    Windows 10 users, {' '}
                    <TextLink to={`${links.in.htmstudio}windows/`}>
                      click here
                    </TextLink> {' '}
                    for further information.
                  </ListItem>
                </List>
              </div>
            </div>
          </div>

          <Anchor name="features" />
          <SubTitle>
            Features
          </SubTitle>
          <div className={styles.columns}>
            <div className={classNames(styles.aside, styles.iconSmall)}>
              <IconBullseye />
            </div>
            <div className={styles.content}>
              <SubTitle level={3}>
                No Coding Skills Required
              </SubTitle>
              <Paragraph>
                Skip the hassle of setting parameters. Discover anomalies with
                one click.
              </Paragraph>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={classNames(styles.aside, styles.iconSmall)}>
              <IconLock />
            </div>
            <div className={styles.content}>
              <SubTitle level={3}>
                Data Privacy
              </SubTitle>
              <Paragraph>
                Add local CSV (comma-separated value) files quickly with no
                upload or privacy issues.
              </Paragraph>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={classNames(styles.aside, styles.iconSmall)}>
              <IconCubes />
            </div>
            <div className={styles.content}>
              <SubTitle level={3}>
                Run Simultaneous Models
              </SubTitle>
              <Paragraph>
                Run multiple data streams simultaneously and compare discovered
                anomalies.
              </Paragraph>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={classNames(styles.aside, styles.iconSmall)}>
              <IconBarChart />
            </div>
            <div className={styles.content}>
              <SubTitle level={3}>
                Summarized Results
              </SubTitle>
              <Paragraph>
                Visualize and export your results.
              </Paragraph>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={classNames(styles.aside, styles.iconSmall)}>
              <IconFolder />
            </div>
            <div className={styles.content}>
              <SubTitle level={3}>
                Pre-Loaded Datasets
              </SubTitle>
              <Paragraph>
                Don’t have your own data readily available? Experiment with our
                pre-loaded datasets, and see how HTM can be applied to a variety
                of use cases.
              </Paragraph>
            </div>
          </div>

          <Anchor name="uses" />
          <SubTitle>
            Use Cases
          </SubTitle>
          <div className={classNames(styles.columns, styles.pad)}>
            <div className={styles.column}>
              <Image
                alt="HTM Studio use case #1"
                respond="w"
                src={ImageUse1}
              />
              <SubTitle level={3}>
                Preventative Maintenance
              </SubTitle>
              <Paragraph>
                Monitor machine sensors to detect failures before they occur.
              </Paragraph>
            </div>
            <div className={styles.column}>
              <Image
                alt="HTM Studio use case #2"
                respond="w"
                src={ImageUse2}
              />
              <SubTitle level={3}>
                IoT Sensors
              </SubTitle>
              <Paragraph>
                Understand energy usage and adjust resources in a connected
                building.
              </Paragraph>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.column}>
              <Image
                alt="HTM Studio use case #3"
                respond="w"
                src={ImageUse3}
              />
              <SubTitle level={3}>
                Traffic Patterns
              </SubTitle>
              <Paragraph>
                Identify unusual patterns in direction or speed from a vehicle.
              </Paragraph>
            </div>
            <div className={styles.column}>
              <Image
                alt="HTM Studio use case #4"
                respond="w"
                src={ImageUse4}
              />
              <SubTitle level={3}>
                Network Servers
              </SubTitle>
              <Paragraph>
                Identify network changes and potential server degradation.
              </Paragraph>
            </div>
          </div>

          <Anchor name="start" />
          <SubTitle>
            Get Started
          </SubTitle>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Video
                image={ImageVideoWalkthru}
                respond="mw"
                time="04:41"
                title="HTM Studio Walk-through"
                type="youtube"
                videoId="a2hshyznLEE"
              />
            </div>
            <div className={styles.content}>
              <Paragraph>
                To get the full HTM Studio experience, watch our short
                walk-through video.
              </Paragraph>
              <Paragraph>
                Data imported into HTM Studio must be formatted to meet certain
                conditions. See requirements and watch our brief instructional
                videos to learn how to prepare your data.
              </Paragraph>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Video
                image={ImageVideoDatetime}
                respond="mw"
                time="04:28"
                title="Date/Time Format Tutorial"
                type="youtube"
                videoId="f80ewxLvgks"
              />
            </div>
            <div className={styles.content}>
              <SubTitle level={3}>
                Date/Time Format
              </SubTitle>
              <Paragraph>
                Data imported into HTM Studio must be in CSV file format and
                meet the following conditions:
              </Paragraph>
              <List marker="disc">
                <ListItem>
                  Only one Date/Time column
                </ListItem>
                <ListItem>
                  Only one header row
                </ListItem>
                <ListItem>
                  Number of rows in the CSV file should be minimum of 400.
                </ListItem>
                <ListItem>
                  Values in numeric columns will be skipped if equal to:
                  <br />
                  "NaN", "None", "null", "N/A", "NA" (not case sensitive)
                </ListItem>
                <ListItem>
                  Any number of numeric columns
                </ListItem>
                <ListItem>
                  Data is listed in chronological order
                </ListItem>
                <ListItem>
                  Date/Time column must be in a {' '}
                  <TextLink to={`${links.in.htmstudio}date-time-formats/`}>
                    supported format
                  </TextLink>
                </ListItem>
                <ListItem>
                  Unix timestamp support (both milliseconds and seconds) as long
                  as the column name contains the words "time" or "date" (case
                  insensitive)
                </ListItem>
              </List>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Video
                image={ImageVideoDatasource}
                respond="mw"
                time="02:47"
                title="Isolating Data Sources Tutorial"
                type="youtube"
                videoId="CRzWS52EdM0"
              />
            </div>
            <div className={styles.content}>
              <SubTitle level={3}>
                Isolating Data Sources
              </SubTitle>
              <Paragraph>
                CSV files must contain data that has only been generated from
                one source. If you have multiple sources, you will need to split
                your data by source and into separate CSV files.
              </Paragraph>
            </div>
          </div>

          <Anchor name="faq" />
          <SubTitle>
            Frequently Asked Questions
          </SubTitle>
          <div className={styles.columns}>
            <div className={classNames(styles.aside, styles.iconLarge)}>
              <IconQuestion />
            </div>
            <div className={styles.content}>
              <div className={styles.faq}>
                {faq}
              </div>
            </div>
          </div>

          <div className={styles.columns}>
            <div className={styles.asideLeft}>
              <Anchor name="resources" />
              <SubTitle>
                Resources
              </SubTitle>
              <List marker="disc">
                <ListItem>
                  <TextLink
                    to="/assets/pdf/htm-studio/HTM-Studio-Data-Sheet.pdf"
                  >
                    HTM Studio Data Sheet
                  </TextLink>
                  <Paragraph>
                    Download this one-page data sheet to learn more about HTM
                    Studio.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  {/* eslint-disable max-len */}
                  <TextLink to={`${links.in.resources}resources/science-of-anomaly-detection/`}>
                    Science of Anomaly Detection Video
                  </TextLink>
                  {/* eslint-enable max-len */}
                  <Paragraph>
                    Learn about the science behind our HTM machine intelligence
                    algorithms in this educational video.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  {TermsLink}
                  <Paragraph>
                    Terms and Conditions for HTM Studio.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <TextLink to={links.in.nab}>
                    Numenta Anomaly Benchmark (NAB)
                  </TextLink>
                  <Paragraph>
                    An open-source benchmark for evaluating anomaly detection in
                    streaming data.
                  </Paragraph>
                </ListItem>
              </List>
            </div>
            <div className={styles.content}>
              <Anchor name="feedback" />
              <SubTitle>
                Feedback
              </SubTitle>
              <Paragraph>
                Provide your feedback on HTM Studio via the form below,
                or email {' '}
                <TextLink to="mailto:htm-studio@numenta.com">
                  htm-studio@numenta.com
                </TextLink> {' '}
                for further information on HTM.
              </Paragraph>
              <Form
                action="https://numenta.wufoo.com/forms/z3mk1q016cylq6/#public"
                name="form17"
              >
                <FormRow>
                  <FormLabel for="Field4">
                    Name
                  </FormLabel>
                  <FormInput
                    name="Field4"
                    placeholder="First Lastname"
                    type="text"
                  />
                </FormRow>
                <FormRow>
                  <FormLabel for="Field5">
                    Email
                  </FormLabel>
                  <FormInput
                    name="Field5"
                    type="email"
                    class="form-control"
                    placeholder="name@company.com"
                  />
                </FormRow>
                <FormRow>
                  <FormLabel for="Field10">
                    Feedback
                  </FormLabel>
                  <FormTextArea
                    name="Field10"
                    placeholder="Please enter your feedback here."
                  />
                </FormRow>
                <FormRow>
                  <FormLabel>&nbsp;</FormLabel>
                  <Button theme="primary" type="submit">Submit</Button>
                </FormRow>
                <FormInput
                  name="idstamp"
                  type="hidden"
                  value="8aHfSHvE01SmfTBSufr1bVy0Sz4OmbH39bFEqizTXs0="
                />
              </Form>
            </div>
          </div>
        </Section>
        {termsModal}
      </article>
    )
  }
}

export default HtmStudioPage
