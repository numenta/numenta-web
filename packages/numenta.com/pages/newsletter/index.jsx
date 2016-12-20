// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import Button from 'numenta-web-shared-components/lib/Button'
import Form from 'numenta-web-shared-components/lib/Form'
import FormInput from 'numenta-web-shared-components/lib/FormInput'
import FormLabel from 'numenta-web-shared-components/lib/FormLabel'
import FormRow from 'numenta-web-shared-components/lib/FormRow'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/ListOrder'
import Section from 'numenta-web-shared-components/lib/Section'
import {sortDateDescend} from 'numenta-web-shared-utils/lib/shared'

import PostListRow from '../../components/PostListRow'
import styles from './index.css'

const title = 'Newsletter'


/**
 * Newsletter page - React view component.
 */
const NewsletterPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (
    (file.path.match(/^newsletter\/.*\.md/))
  ))
  const items = posts.sort(sortDateDescend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostListRow post={post} />
    </ListItem>
  ))

  return (
    <article>
      <Helmet title={title} />
      <div className={styles.signup}>
        {/* eslint-disable max-len */}
        <Form
          action="//numenta.us2.list-manage.com/subscribe/post?u=b838879da2baa539870afd320&amp;id=23e65d3407"
          method="post"
          name="mc-embedded-subscribe-form"
        >
          <FormRow>
            <div className={styles.field}>
              <FormLabel htmlFor="EMAIL">Newsletter Signup</FormLabel>
              <FormInput
                name="EMAIL"
                placeholder="name@company.com"
                stretch="large"
                type="email"
              />
              <Button theme="short" type="submit">Send</Button>
            </div>
          </FormRow>
          <FormInput
            name="b_b838879da2baa539870afd320_23e65d3407"
            type="hidden"
            value=""
          />
        </Form>
        {/* eslint-enable max-len */}
      </div>
      <div className={styles.newsletter}>
        <Section headline={true} open={true} title={title}>
          <ListOrder copy={false}>
            {items}
          </ListOrder>
        </Section>
      </div>
    </article>
  )
}

NewsletterPage.contextTypes = {
  route: React.PropTypes.object,
}

export default NewsletterPage
