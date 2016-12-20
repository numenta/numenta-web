// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import IconEncoder from 'react-icons/lib/fa/qrcode'
import IconSdr from 'react-icons/lib/fa/barcode'
import IconSpace from 'react-icons/lib/ti/location'
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
const SchoolPage = () => (
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
            Open Source Community Flag-Bearer Matt Taylor. Watch these videos
            to see detailed visualizations of HTM systems running, and
            thoughtful breakdowns of the biological algorithms involved.
          </Paragraph>
          <Paragraph>
            This series was designed for a general audience to be viewed in
            order, but feel free to jump into any episode.
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
            So you have no idea what HTM is? In this first introductory
            episode of HTM School, Matt walks you through the high-level
            theory of Hierarchical Temporal Memory in less than 15 minutes.
            You’ll learn why Numenta believes that HTM leads to truly
            intelligent machines.
          </Paragraph>
          <Paragraph>
            For a longer and more technical introduction to HTM, here are a
            few further videos featuring Numenta's co-founder Jeff Hawkins:
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to="https://youtu.be/6ufPpZDmPKA">
                Principles of Hierarchical Temporal Memory (HTM)
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to="https://youtu.be/izO2_mCvFaw">
                What the Brain says about Machine Intelligence
              </TextLink>
            </ListItem>
          </List>
        </div>
      </div>


      <Anchor name="sdrs" />
      <SubTitle>SDRs</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.icon}>
            <IconSdr color="inherit" />
          </div>
        </div>
        <div className={styles.content}>
          <Paragraph>
            Sparse Distributed Representations are a fundamental aspect of HTM
            systems. Let's start at the very beginning!
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
            HTMs rely heavily on bit arrays, so here are the basics. You’ll
            learn about binary operations like OR and AND, and Matt will
            introduce some basic concepts of sparse binary arrays.
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
            Now we formally introduce the Sparse Distributed Representation
            (SDR). SDRs are a fundamental concept of HTM theory. Your brain
            wouldn’t be the same without using them. SDRs represent a neuron’s
            view of other neurons in the brain at any point in time. Each bit
            in an SDR might represent another neuron.
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
            In this episode of HTM School, we talk about SDR overlap sets and
            subsampling. This explains how properties of SDRs make them
            extremely fault tolerant.
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
            Using SDR sets to identify SDRs that have been seen in the past.
            By comparing one SDR to a set of SDRs, we can tell if we’ve seen
            it before, even with noise present. If we squash the set into a
            union, we can still tell if we’ve seen it before while performing
            exponentially fewer operations.
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
            How Do Neurons Operate on Sparse Distributed Representations? A
            Mathematical Theory of Sparsity, Neurons and Active Dendrites
          </TextLink>
        </ListItem>
        <ListItem>
          <TextLink to="http://arxiv.org/abs/1503.07469">
            Properties of Sparse Distributed Representations and their
            Application To Hierarchical Temporal Memory
          </TextLink>
        </ListItem>
      </List>
      {/* eslint-enable max-len */}


      <Anchor name="encoders" />
      <SubTitle>
        Encoders
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.icon}>
            <IconEncoder color="inherit" />
          </div>
        </div>
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
            title="Scalar Encoding"
            type="youtube"
            videoId="PTYlge2K1G8"
          />
        </div>
        <div className={styles.content}>
          <Paragraph>
            Now it's time to investigate datetime encoding, and explore how
            different semantic information from the same data point can be
            encoded into one output SDR. After this episode, you might get
            some ideas about your own encoders.
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
      </List>


      <Anchor name="spatial-pooling" />
      <SubTitle>
        Spatial Pooling
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.icon}>
            <IconSpace color="inherit" />
          </div>
        </div>
        <div className={styles.content}>
          <Paragraph>
            The idea for the Spatial Pooler came from an observation in biology.
            The neocortex is composed of a hierarchy of regions. The
            feed-forward input to each region consists of millions of nerve
            axons which come from sensory organs and other regions. Most regions
            in the neocortex receive input from multiple sources; it is not
            uncommon for a region to receive input from six or more other
            regions. These inputs are generally mixed together, so a region
            doesn’t “know” where the inputs originated or what they represent.
            Confusing the picture, the number of input axons doesn’t correlate
            closely with the size of the region. For example, in humans there
            are about one million input axons projecting to the primary visual
            region (V1) of the neocortex. However, the areal size of V1 varies
            considerably in normal humans, reportedly by up to a factor of
            three! How can a region process inputs from many different sources
            without any prior knowledge of what these inputs represent, how many
            input bits there will be, and what spatial patterns may exist in the
            input?
          </Paragraph>
        </div>
      </div>

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
            title="Scalar Encoding"
            type="youtube"
            videoId="R5UoFNtv5AU"
          />
        </div>
        <div className={styles.content}>
          <Paragraph>
            In this episode, Matt introduces SP with respect to the input
            space of a spatial pooler, and how it randomly creates connections
            to the input space.
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
            title="Scalar Encoding"
            type="youtube"
            videoId="rHvjykCIrZM"
          />
        </div>
        <div className={styles.content}>
          <Paragraph>
            In this episode of HTM School, we talk about how each column in
            the Spatial Pooler learns to represent different spatial
            characteristics in the input space.
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
            title="Scalar Encoding"
            type="youtube"
            videoId="MSwoNAODrgk"
          />
        </div>
        <div className={styles.content}>
          <Paragraph>
            Learn about boosting and inhibition in this episode of HTM School
            with Matt Taylor.
          </Paragraph>
        </div>
      </div>


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

SchoolPage.contextTypes = {
  config: React.PropTypes.object,
}

export default SchoolPage
