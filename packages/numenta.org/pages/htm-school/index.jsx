// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import IconTime from 'react-icons/lib/ti/media-play'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import Image from 'numenta-web-shared-components/lib/Image'
import List from 'numenta-web-shared-components/lib/List'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import TextLink from 'numenta-web-shared-components/lib/TextLink'
import Section from 'numenta-web-shared-components/lib/Section'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import Video from 'numenta-web-shared-components/lib/Video'
import Strong from 'numenta-web-shared-components/lib/Strong'
import Quote from 'numenta-web-shared-components/lib/Quote'

import ImageEpisode0 from './images/ep0.png'
import ImageEpisode1 from './images/ep1.png'
import ImageEpisode2 from './images/ep2.png'
import ImageEpisode3 from './images/ep3.png'
import ImageEpisode4 from './images/ep4.png'
import ImageEpisode5 from './images/ep5.png'
import ImageEpisode6 from './images/ep6.png'
import ImageEpisode7 from './images/ep7.png'
import ImageEpisode8 from './images/ep8.png'
import ImageEpisode9 from './images/ep9.png'
import ImageMain from './images/image.png'
import styles from './index.css'

const title = 'HTM School'

/**
 * HTM School page - React view component.
 */
const SchoolPage = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>

        <div className={styles.columns}>
          <div className={styles.aside}>
            <div className={styles.narrow}>
              <Image
                alt="HTM School Logo"
                border={false}
                respond="mw"
                shadow={false}
                src={ImageMain}
              />
            </div>
          </div>
          <div className={styles.content}>
            <Paragraph lead={true}>
              HTM School is a series of educational videos hosted by Numenta
              {' '}<em>
                Open Source Community Flag-Bearer
              </em> {' '}
              <Strong>
                Matt Taylor
              </Strong>. Watch these
              videos to see detailed visualizations of HTM systems running,
              and thoughtful breakdowns of the biological algorithms
              involved.
            </Paragraph>
            <Paragraph>
              This series was designed for a general audience to be viewed
              in order, but feel free to jump into any episode. There is no
              need to have a background in neuroscience, mathematics, or
              computer science to understand HTM Theory.
            </Paragraph>
            <Quote>
              Please Subscribe to our&nbsp;
              <TextLink to={links.out.youtube}>
                YouTube channel
              </TextLink> {' '}
              to keep updated on new content.
            </Quote>
            <Paragraph>
              Read below for a description of the videos, and click the video
              icons on the right to watch!
            </Paragraph>
          </div>
        </div>

        <Anchor name="overview" />
        <SubTitle>Overview</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Video
              border={true}
              image={ImageEpisode0}
              respond="mw"
              shadow={true}
              title="Overview"
              type="youtube"
              videoId="XMB0ri4qgwc"
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              In this introductory episode of
              HTM School, Matt walks you through the high-level theory of
              {' '} <Strong>
                Hierarchical Temporal Memory
              </Strong> {' '}
              in less than 15 minutes.
            </Paragraph>

            <Paragraph>
              Hierarchical Temporal Memory is a theory of intelligence based
              upon neuroscience research. The neocortex is the seat of
              intelligence in the brain, and it is structurally homogeneous
              throughout. This means a common algorithm is processing all your
              sensory input, no matter which sense. We believe we have
              discovered some of the foundational algorithms
              of the neocortex, and we've implemented them in software.
            </Paragraph>

          </div>
        </div>

        <Anchor name="sdrs" />
        <SubTitle>SDRs</SubTitle>
        <div className={styles.columns}>
          <div className={styles.content}>
            <Paragraph>
              <Strong>
                Sparse Distributed Representations (SDRs)
              </Strong> {' '}
              are a fundamental aspect of HTM systems. Before we talk about
              neurons and dendrites, we need to establish the communications
              medium of the brain. Each neuron could be connected to thousands
              of other neurons, and each of those synapses could activate at any
              time. In the brain, only about 2% of your neurons are in an active
              state right at any time. Watch the videos below to better
              understand why this is important, and why this type of medium
              lends the brain so much flexibility.
            </Paragraph>
          </div>
        </div>

        <Anchor name="bit-arrays" />
        <SubTitle level={3}>Bit Arrays</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Video
              border={true}
              image={ImageEpisode1}
              respond="mw"
              shadow={true}
              title="SDR Bit Arrays"
              type="youtube"
              videoId="Ub1fE-bAroA"
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              An SDR is simply a list of bits, each bit being
              {' '} <code>0</code> {' '}
              or
              {' '} <code>1</code>.
              The brain performs a lot of binary operations on
              these long bit arrays as it is trying to predict future input.
              This episode introduces bit arrays and some basic binary
              operations like OR and AND. We will also introduce the idea of
              semantic data storage within SDRs.
            </Paragraph>
          </div>
        </div>

        <Anchor name="capacity-and-comparison" />
        <SubTitle level={3}>Capacity and Comparison</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Video
              border={true}
              image={ImageEpisode2}
              respond="mw"
              shadow={true}
              title="SDR Capacity and Comparison"
              type="youtube"
              videoId="ZDgCdWTuIzc"
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              In this episode, we talk about the massive amount of data that can
              be represented in typical SDR structures. We also show how
              different SDRs can be compared to identify how similar they are.
              Of particular interest is the
              {' '}<em>overlap score</em> {' '}
              between two SDRs as a measure of their similarity.
            </Paragraph>
          </div>
        </div>

        <Anchor name="overlap-sets-and-sampling" />
        <SubTitle level={3}>Overlap Sets and Sampling</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Video
              border={true}
              image={ImageEpisode3}
              respond="mw"
              shadow={true}
              title="SDR Overlap Sets and Sampling"
              type="youtube"
              videoId="vU2OZdgBXAQ"
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              How many SDRs can be expressed in different input spaces? What are
              the chances of false positive collisions? What happens if we only
              compare a sample of the on bits in different SDRs? Believe it or
              not, HTM systems prove to be extremely fault-tolerant. This is
              expressed in this episode as Matt talks about sampling SDRs
              instead of storing every on bit.
            </Paragraph>
          </div>
        </div>

        <Anchor name="sets-and-unions" />
        <SubTitle level={3}>Sets and Unions</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Video
              border={true}
              image={ImageEpisode4}
              respond="mw"
              shadow={true}
              title="SDR Sets and Unions"
              type="youtube"
              videoId="8WIzIBaLXIs"
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              We can collect sets of SDRs over time. As we see new SDRs, we can
              compare them to our sets using the binary comparison operations
              described earlier. Even in the presence of large amounts of noise,
              Matt shows how SDRs can still be dependably classified. If we
              squash the sets into unions, we can still tell if we’ve seen it
              before while performing exponentially fewer operations.
            </Paragraph>
          </div>
        </div>

        <Anchor name="more-sdr-resources" />
        <SubTitle level={3}>More SDR Resources</SubTitle>
        {/* eslint-disable max-len */}
        <List marker="disc">
          <ListItem>
            <TextLink to="https://www.youtube.com/watch?v=iNMbsvK8Q8Y">
              Modeling Data Streams Using Sparse Distributed Representations
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="http://numenta.com/papers-videos-and-more/resources/sparse-distributed-representations/">
              Sparse Distributed Representations: Our Brain's Data Structure
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="http://arxiv.org/abs/1601.00720">
              How Do Neurons Operate on Sparse Distributed Representations? A Mathematical Theory of Sparsity, Neurons and Active Dendrites
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="http://arxiv.org/abs/1503.07469">
              Properties of Sparse Distributed Representations and their Application To Hierarchical Temporal Memory
            </TextLink>
          </ListItem>
        </List>
        {/* eslint-enable max-len */}

        <Anchor name="encoders" />
        <SubTitle>
          Encoders
        </SubTitle>
        <div className={styles.columns}>
          <div className={styles.content}>
            <Paragraph>
              Encoding real-world data into SDRs is a very important process to
              understand in HTM. Semantic meaning within the input data must be
              encoded into a binary representation. These videos show some
              examples of encoding data into binary arrays so they can be
              processed by the Spatial Pooler.
            </Paragraph>
          </div>
        </div>

        <Anchor name="scalar-encoding" />
        <SubTitle level={3}>
          Scalar Encoding
        </SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Video
              border={true}
              image={ImageEpisode5}
              respond="mw"
              shadow={true}
              title="Scalar Encoding"
              type="youtube"
              videoId="V3Yqtpytif0"
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              So how can data be translated into Sparse Distributed
              Representations? In this episode, Matt introduces some encoding
              concepts and talks about encoding scalar values. These examples
              are very simple, but widely used in HTM systems.
            </Paragraph>
            <Paragraph>
              How many ways can scalar data be encoded into a binary input
              space? You'll find out two ways we do it, but there are countless
              other ways to semantically encode data.
            </Paragraph>
          </div>
        </div>

        <Anchor name="datetime-encoding" />
        <SubTitle level={3}>
          Datetime Encoding
        </SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Video
              border={true}
              image={ImageEpisode6}
              respond="mw"
              shadow={true}
              title="DateTime Encoding"
              type="youtube"
              videoId="PTYlge2K1G8"
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              If we want an HTM system to comprehend the passage of time as we
              humans have (minutes, hours, days, months), that data should be
              encoded into a semantic representation and included along with any
              data in an input row. In this episode, Matt explains how a
              Date-Time Encoder works by joining together several periodic
              scalar encodings.
            </Paragraph>
            <Paragraph>
              After this episode, you might have some ideas about your own
              encoders. This space has endless potential. If you're interested
              in writing your own encoder, be sure to check out the extra
              resources below.
            </Paragraph>
          </div>
        </div>

        <Anchor name="more-encoder-resources" />
        <SubTitle level={3}>
          More Encoder Resources
        </SubTitle>
        <List marker="disc">
          <ListItem>
            <TextLink to="http://arxiv.org/abs/1602.05925">
              Encoding Data for HTM Systems
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="https://www.youtube.com/watch?v=KxxHo-FtKRo">
              Geospatial Coordinate Encoder
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="https://www.youtube.com/watch?v=_q5W2Ov6C9E">
              Random Distributed Scalar Encoder
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="https://www.youtube.com/watch?v=BCwOgbSSDM4">
              Beginner's Guide to NuPIC
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to="https://discourse.numenta.org/search?q=sdrs">
              SDR Forum Discussions
            </TextLink>
          </ListItem>
        </List>

        <Anchor name="spatial-pooling" />
        <SubTitle>
          Spatial Pooling
        </SubTitle>

        <Paragraph>
          Input coming from the senses or other parts of the brain are messy and
          irregular. The Spatial Pooler's job is to normalize the sparsity of
          the input while retaining semantically encoded information.
        </Paragraph>

        <Anchor name="input-space-and-connections" />
        <SubTitle level={3}>
          Input Space and Connections
        </SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Video
              border={true}
              image={ImageEpisode7}
              respond="mw"
              shadow={true}
              title="Input Space and Connections"
              type="youtube"
              videoId="R5UoFNtv5AU"
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              An input space is like a fiber optics cable. The Spatial Pooler
              needs to map its cells to the input space in a way that they will
              be able to learn once patterns in the space start to change. Watch
              this video to find out how the Spatial Pooler's columns are
              initialized onto the input space, and how random connections are
              established.
            </Paragraph>
          </div>
        </div>

        <Anchor name="learning" />
        <SubTitle level={3}>
          Learning
        </SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Video
              border={true}
              image={ImageEpisode8}
              respond="mw"
              shadow={true}
              title="Learning"
              type="youtube"
              videoId="rHvjykCIrZM"
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              Now we are going to start feeding real data into the Spatial
              Pooler and watching as different columns learn to recognize
              different characteristics of the input space.
            </Paragraph>
            <Paragraph>
              Matt will show you how each column becomes active depending on its
              connections to the input space, and he'll show you some learning
              rules columns use. You will also see how a
              "random" Spatial Pooler compares to an SP with learning turned on.
            </Paragraph>
          </div>
        </div>

        <Anchor name="boosting-and-inhibition" />
        <SubTitle level={3}>
          Boosting and Inhibition
        </SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Video
              border={true}
              image={ImageEpisode9}
              respond="mw"
              shadow={true}
              title="Boosting and Inhibition"
              type="youtube"
              videoId="MSwoNAODrgk"
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              Today's topic is "Homeostatic Regulation of Neuronal
              Excitability", or <em>boosting</em>. Learn about what this is, why
              it's necessary, and how it works by watching this episode of HTM
              School.
            </Paragraph>
            <Paragraph>
              You'll learn about active duty cycles and see how some columns can
              become much more active than others, limiting the total capacity
              and efficiency of the Spatial Pooler. After boost factors are
              calculated, watch as cellular activity spreads more evenly.
            </Paragraph>
          </div>
        </div>

        <Anchor name="more-sp-resources" />
        <SubTitle level={3}>
          More Spatial Pooling Resources
        </SubTitle>
        <List marker="disc">
          <ListItem>
            <TextLink
              to="https://discourse.numenta.org/search?q=spatial+pooling"
            >
              Spatial Pooling Forum Discussions
            </TextLink>
          </ListItem>
        </List>


        <Anchor name="temporal-memory" />
        <SubTitle>
          Temporal Memory
        </SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <div className={styles.icon}>
              <IconTime color="inherit" />
            </div>
          </div>
          <div className={styles.content}>
            <Paragraph>
              Coming Soon.
            </Paragraph>
          </div>
        </div>

      </Section>
    </article>
  )
}

SchoolPage.contextTypes = {
  config: React.PropTypes.object,
}

export default SchoolPage
