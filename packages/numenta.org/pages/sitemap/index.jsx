// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'
import zipObject from 'lodash/zipObject'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/ListOrder'
import Section from 'numenta-web-shared-components/lib/Section'
import {sortDateDescend} from 'numenta-web-shared-utils/lib/universal'
import Spacer from 'numenta-web-shared-components/lib/Spacer'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import Subtle from 'numenta-web-shared-components/lib/Subtle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import styles from './index.css'

const title = 'Sitemap'

const SitemapItem = (props) => {
  const {data, path} = props
  return (
    <ListItem {...props}>
      <TextLink to={path}>
        {data.title}
      </TextLink> {' '}
      <Spacer />
      <Subtle>{data.date}</Subtle>
    </ListItem>
  )
}
SitemapItem.propTypes = {
  data: React.PropTypes.object.isRequired,
  path: React.PropTypes.string.isRequired,
}


/**
 * Sitemap Page React view component
 */
const SitemapPage = (props, {config, route}) => {
  const {links} = config
  const {pages} = route
  const categories = [
    'blog',
    'papers',
  ]
  const posts = categories
    .map((category) => pages
      .filter(({data, file}) => {
        const matcher = new RegExp(`.*${category}/.*.md`)
        return (data.type === 'post') && file.path.match(matcher)
      })
      .sort(sortDateDescend)
      .map((post) => {
        post.key = post.file.stem
        return React.createElement(SitemapItem, post)
      })
    )
  const items = zipObject(categories, posts)

  return (
    <article>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>

        <div className={styles.columns}>
          <div className={styles.content}>

            <Anchor name="main" />
            <SubTitle>Main</SubTitle>
            <ListOrder marker="disc">
              <ListItem>
                <TextLink to={links.in.home}>
                  Home
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.research}>
                  Research &amp; Publications
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.htm}>
                  Hierarchical Temporal Memory (HTM)
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.community}>
                  Community
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.code}>
                  Code
                </TextLink>
              </ListItem>
            </ListOrder>

          </div>
          <div className={styles.aside}>

            <Anchor name="other" />
            <SubTitle>Other</SubTitle>
            <ListOrder marker="disc">
              <ListItem>
                <TextLink to={links.in.history}>
                  HTM History
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.out.school}>
                  HTM School
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.implement}>
                  Implementations
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.papers}>
                  Research Papers
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.faq}>
                  Frequently Asked Questions (FAQ)
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.privacy}>
                  Privacy Policy
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.terms}>
                  Terms of Service
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.sitemap}>
                  Sitemap
                </TextLink>
              </ListItem>
            </ListOrder>

          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.content}>

            <Anchor name="blog" />
            <SubTitle>
              <TextLink to={links.in.blog}>
                Blog
              </TextLink>
            </SubTitle>
            <ListOrder marker="disc">
              {items.blog}
            </ListOrder>

          </div>
          <div className={styles.aside}>

            <Anchor name="licenses" />
            <SubTitle>
              <TextLink to={links.in.license}>
                Licenses
              </TextLink>
            </SubTitle>
            <ListOrder marker="disc">
              <ListItem>
                <TextLink to={links.in.conduct}>
                  Code of Conduct
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.contrib}>
                  Contributor License
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.trial}>
                  Trial License
                </TextLink>
              </ListItem>
            </ListOrder>

            <Anchor name="papers" />
            <SubTitle>
              <TextLink to={links.in.papers}>
                Papers
              </TextLink>
            </SubTitle>
            <ListOrder marker="disc">
              {items.papers}
            </ListOrder>

          </div>
        </div>

      </Section>
    </article>
  )
}

SitemapPage.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default SitemapPage
