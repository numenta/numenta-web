// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import Image from 'numenta-web-shared-components/lib/Image'
import List from 'numenta-web-shared-components/lib/List'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import {sortDateDescend} from 'numenta-web-shared-utils/lib/shared'

import ImageCareers from './images/careers.png'
import ImageCeleste from './images/team/celeste-baranski.png'
import ImageDonna from './images/team/donna-dubinsky.jpg'
import ImageEd from './images/team/ed-colligan.jpg'
import ImageHarry from './images/team/harry-saal.jpg'
import ImageJeff from './images/team/jeff-hawkins.jpg'
import ImageMike from './images/team/mike-farmwald.jpg'
import ImageSubutai from './images/team/subutai-ahmad.jpg'
import styles from './index.css'


/**
 * Careers & Team MainSection and page content - React view component.
 */
const SectionCareers = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (
    (file.path.match(/^.*\/careers\/.*\.md/))
  ))
  const careers = posts.sort(sortDateDescend).map(({data, file, path}) => (
    <ListItem key={file.stem}>
      <TextLink to={path}>
        {data.title}
      </TextLink>
    </ListItem>
  ))

  return (
    <article>
      <Anchor name="careers" />
      <SubTitle>Careers</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="Numenta Office Interior"
            border={true}
            respond="mw"
            src={ImageCareers}
          />
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Company culture is important to us, so why not join a startup that
            feels like a family? We may be busy cracking the code on machine
            intelligence, but we’ve got a work-hard, play-hard attitude. Our
            kitchen is stocked with salty and sweet snacks, and on Wednesdays
            we enjoy catered lunches from a variety of local restaurants.
          </Paragraph>
          <Paragraph>
            At the heart of the peninsula, our downtown Redwood City location
            is a short walk from the Caltrain station.  Outside the office, we
            blow off steam with company events, happy hours and other fun
            activities. In the past, we’ve cheered on the SF Giants, baked
            pies at Pie Ranch in Pescadero, and do-si-doed through the night.
          </Paragraph>

          <SubTitle level={3}>Current Openings</SubTitle>
          <List marker="disc">
            {careers}
          </List>
        </div>
      </div>

      <Anchor name="team" />
      <SubTitle>Management Team</SubTitle>
      <List copy={false}>
        <ListItem>

          <SubTitle level={4}>Donna Dubinsky</SubTitle>
          <SubTitle level={5}>CEO & Co-Founder</SubTitle>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Image
                alt="Donna Dubinsky"
                border={true}
                respond="mw"
                src={ImageDonna}
              />
            </div>
            <div className={styles.content}>
              <Paragraph>
                Donna first partnered with Jeff Hawkins at Palm, Inc. in 1992,
                where she served as president and CEO. She held this position
                throughout Palm's acquisition by U.S Robotics and subsequently
                3Com Corporation. In 1998, Donna and Jeff co-founded Handspring,
                creator of the category-defining Treo smartphone. Handspring
                merged with Palm in 2003, and Donna continued to serve on Palm's
                board until 2009. Previously, Donna spent 10 years at Apple Inc.
                in a multitude of sales, sales support, and logistics
                functions—both at Apple and at Claris, an Apple software
                subsidiary.
              </Paragraph>
              <Paragraph>
                Donna earned a B.A. from Yale University, and an M.B.A. from
                Harvard Business School. She is currently on the board of Yale
                University.
              </Paragraph>
            </div>
          </div>

        </ListItem>
        <ListItem>

          <SubTitle level={4}>Jeff Hawkins</SubTitle>
          <SubTitle level={5}>Co-Founder</SubTitle>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Image
                alt="Jeff Hawkins"
                border={true}
                respond="mw"
                src={ImageJeff}
              />
            </div>
            <div className={styles.content}>
              <Paragraph>
                Jeff is an engineer, serial entrepreneur, scientist, inventor
                and author. His life-long interest in neuroscience and theories
                of the neocortex has driven his passion for building a
                technology based on neocortical theory. Previously, he founded
                two mobile computing companies, Palm and Handspring, and is the
                architect of many computing products such as the PalmPilot and
                Treo smartphone. In 2002, he founded the Redwood Neuroscience
                Institute, a scientific institute focused on understanding how
                the neocortex processes information. The institute is currently
                located at U.C. Berkeley. In 2004 Jeff wrote the book, On
                Intelligence, which outlines Hierarchical Temporal Memory (HTM)
                and describes progress on understanding the neocortex.
              </Paragraph>
              <Paragraph>
                Jeff earned his B.S. in Electrical Engineering from Cornell
                University in 1979. He was elected to the National Academy of
                Engineering in 2003.
              </Paragraph>
            </div>
          </div>

        </ListItem>
        <ListItem>

          <SubTitle level={4}>Subutai Ahmad</SubTitle>
          <SubTitle level={5}>VP of Research</SubTitle>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Image
                alt="Subutai Ahmad"
                border={true}
                respond="mw"
                src={ImageSubutai}
              />
            </div>
            <div className={styles.content}>
              <Paragraph>
                Subutai brings experience across real time systems, computer
                vision and learning to Numenta. He has previously served as VP
                Engineering at YesVideo, Inc. where he helped grow the company
                from a three-person start-up to a leader in automated digital
                media authoring. In 1997, Subutai co- founded ePlanet
                Interactive, a spin-off from Interval Research. ePlanet
                developed the IntelPlay Me2Cam, the first computer vision
                product developed for consumers. He has served as a key
                researcher at Interval Research.
              </Paragraph>
              <Paragraph>
                Subutai holds a B.S. in Computer Science from Cornell
                University, and a Ph.D in Computer Science from the University
                of Illinois at Urbana-Champaign. While pursuing his Ph.D,
                Subutai completed a thesis on computational neuroscience models
                of visual attention.
              </Paragraph>
            </div>
          </div>

        </ListItem>
        <ListItem>

          <SubTitle level={4}>Celeste Baranski</SubTitle>
          <SubTitle level={5}>VP of Engineering</SubTitle>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Image
                alt="Celeste Baranski"
                border={true}
                respond="mw"
                src={ImageCeleste}
              />
            </div>
            <div className={styles.content}>
              <Paragraph>
                Celeste has vast experience in high tech engineering, design and
                management. Previously, Celeste was SVP Engineering & Operations
                at Panasas, a Big Data storage provider. She was CEO and
                Co-Founder of Vitamin D, one of the first developers to use the
                NuPIC platform. Celeste also served in VP Engineering roles at
                Palm and at Handspring, where she led the companies’ engineering
                efforts for handheld computers and smartphones. Celeste has
                built effective engineering teams, starting from a few to over
                500 and has delivered numerous successful and award-winning
                products.
              </Paragraph>
              <Paragraph>
                Celeste holds both a B.S. and M.S. in electrical engineering
                from Stanford University.
              </Paragraph>
            </div>
          </div>

        </ListItem>
      </List>

      <Anchor name="board" />
      <SubTitle>Board of Directors</SubTitle>
      <List copy={false}>
        <ListItem>

          <SubTitle level={4}>Ed Colligan</SubTitle>
          <SubTitle level={5}>Former President & CEO, Palm, Inc.</SubTitle>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Image
                alt="Ed Colligan"
                border={true}
                respond="mw"
                src={ImageEd}
              />
            </div>
            <div className={styles.content}>
              <Paragraph>
                Ed has been a part of the core team of five Silicon Valley
                start-ups. Ed’s first big success was Radius, Inc. where he was
                instrumental in building products and the brand. After Radius,
                Ed was the first vice president of marketing for Palm where he
                helped develop the original Palm Pilot, the Palm brand and
                Palm's product strategy. He moved on from Palm to found
                Handspring where Ed and his partners created the forbearer of
                all future smartphones; the Handspring Treo. Ed drove the
                transaction that reunited Palm and Handspring into a single Palm
                again. He established relationships with wireless carriers
                globally and drove Palm's annual smartphone business to more
                than $2 billion. As the CEO of Palm, Ed spearheaded the
                transformation that created the WebOS platform and Palm Pre line
                of smartphones.
              </Paragraph>
              <Paragraph>
                Ed now spends his time investing in and mentoring entrepreneurs.
                Ed is a board member of Numenta, Inc., Active Mind Technology,
                and POPS Worldwide, and is an investor and on the board of
                advisors of six other start-up companies. Ed holds a B.S. from
                the University of Oregon.
              </Paragraph>
            </div>
          </div>

        </ListItem>
        <ListItem>

          <SubTitle level={4}>Donna Dubinsky</SubTitle>
          <SubTitle level={5}>CEO & Co-Founder</SubTitle>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Image
                alt="Donna Dubinsky"
                border={true}
                respond="mw"
                src={ImageDonna}
              />
            </div>
            <div className={styles.content}>
              <Paragraph>
                Donna first partnered with Jeff Hawkins at Palm, Inc. in 1992,
                where she served as president and CEO. She held this position
                throughout Palm's acquisition by U.S Robotics and subsequently
                3Com Corporation. In 1998, Donna and Jeff co-founded Handspring,
                creator of the category-defining Treo smartphone. Handspring
                merged with Palm in 2003, and Donna continued to serve on Palm's
                board until 2009. Previously, Donna spent 10 years at Apple Inc.
                in a multitude of sales, sales support, and logistics
                functions—both at Apple and at Claris, an Apple software
                subsidiary.
              </Paragraph>
              <Paragraph>
                Donna earned a B.A. from Yale University, and an M.B.A. from
                Harvard Business School. She is currently on the board of Yale
                University.
              </Paragraph>
            </div>
          </div>

        </ListItem>
        <ListItem>

          <SubTitle level={4}>Mike Farmwald</SubTitle>
          <SubTitle level={5}>General Partner, Skymoon Ventures</SubTitle>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Image
                alt="Mike Farmwald"
                border={true}
                respond="mw"
                src={ImageMike}
              />
            </div>
            <div className={styles.content}>
              <Paragraph>
                Mike Farmwald is a successful serial entrepreneur. He has
                founded many companies with breakthrough technologies including
                FTL, a super computing company that merged with MIPs, Epigram,
                which was acquired by Broadcom, Rambus and Matrix Semiconductor,
                a creator of 3D integrated circuits.
              </Paragraph>
              <Paragraph>
                Mike currently sits on the board of Rambus (NASDAQ: RMBS). He is
                participating on the Numenta board as an individual, rather than
                as a representative of Skymoon Ventures. Mike holds a B.S.
                degree in Mathematics from Purdue University and a Ph.D. in
                Computer Science from Stanford University.
              </Paragraph>
            </div>
          </div>

        </ListItem>
        <ListItem>

          <SubTitle level={4}>Jeff Hawkins</SubTitle>
          <SubTitle level={5}>Co-Founder</SubTitle>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Image
                alt="Jeff Hawkins"
                border={true}
                respond="mw"
                src={ImageJeff}
              />
            </div>
            <div className={styles.content}>
              <Paragraph>
                Jeff is an engineer, serial entrepreneur, scientist, inventor
                and author. His life-long interest in neuroscience and theories
                of the neocortex has driven his passion for building a
                technology based on neocortical theory. Previously, he founded
                two mobile computing companies, Palm and Handspring, and is the
                architect of many computing products such as the PalmPilot and
                Treo smartphone. In 2002, he founded the Redwood Neuroscience
                Institute, a scientific institute focused on understanding how
                the neocortex processes information. The institute is currently
                located at U.C. Berkeley. In 2004 Jeff wrote the book, On
                Intelligence, which outlines Hierarchical Temporal Memory (HTM)
                and describes progress on understanding the neocortex.
              </Paragraph>
              <Paragraph>
                Jeff earned his B.S. in Electrical Engineering from Cornell
                University in 1979. He was elected to the National Academy of
                Engineering in 2003.
              </Paragraph>
            </div>
          </div>

        </ListItem>
        <ListItem>

          <SubTitle level={4}>Harry Saal</SubTitle>
          <SubTitle level={5}>
            Chairman, Retrotope, Inc.
          </SubTitle>
          <div className={styles.columns}>
            <div className={styles.aside}>
              <Image
                alt="Harry Saal"
                border={true}
                respond="mw"
                src={ImageHarry}
              />
            </div>
            <div className={styles.content}>
              <Paragraph>
                In 2002, Dr. Harry J. Saal was chosen by the US Department of
                Justice to lead the Technical Committee charged with monitoring
                and enforcing the Microsoft Antitrust case, and he served as
                Chairman of the Committee through the May 2011 expiration of the
                Judgment.
              </Paragraph>
              <Paragraph>
                Harry founded Nestar Systems, a pioneer in local area network
                systems, in 1978. In 1986, Harry became the founder and CEO of
                Network General Corporation, the first company wholly dedicated
                to the area of network diagnostics. From 1993 through 1995,
                Harry served as founding CEO and President of Smart Valley,
                Inc., a non-profit organization chartered to create a regional
                electronic community based on an advanced information
                infrastructure and the collective ability to use it.
              </Paragraph>
              <Paragraph>
                Harry is active in philanthropy and community affairs, and
                serves on the board of the American Institute of Mathematics,
                among others. Harry holds a B.A., M.A. and Ph.D. in Physics from
                Columbia University.
              </Paragraph>
            </div>
          </div>

        </ListItem>
      </List>
    </article>
  )
}

SectionCareers.contextTypes = {
  route: React.PropTypes.object,
}

export default SectionCareers
