import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = ({ data }) => (
  <Layout data={data.contentfulSeo}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery($locale: String) {
    contentfulSeo(node_locale: { eq: $locale }) {
      ...Seo
    }
  }
`
