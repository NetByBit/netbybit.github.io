import React, { Component } from 'react'
import { graphql } from 'gatsby'

import '../styles/app.scss'
import 'devicon/devicon.css'
import 'devicon/devicon-colors.css'

import Layout from '../components/layout'
import Header from '../components/header'
import SocialMedia from '../components/social-media'
import WhyUs from '../components/why-us'
import Features from '../components/features'
import WhyHireUs from '../components/why-hire-us'
import Freelancing from '../components/freelancing'
import OurTeam from '../components/our-team'
import ContactUs from '../components/contact-us'
import LocaleContext from '../localeContext'

class IndexPage extends Component {
  state = {
    locale: '',
  }

  static getDerivedStateFromProps(props, state) {
    if (props.pageContext.locale !== state.locale) {
      return {
        locale: props.pageContext.locale,
      }
    }
    return null
  }

  render() {
    const { data } = this.props
    return (
      <LocaleContext.Provider value={this.state.locale}>
        <Layout data={data.contentfulSeo} navbarData={data.contentfulNavbar}>
          <Header data={data.contentfulHeader} />
          <SocialMedia data={data.contentfulSocialMedia} />
          <WhyUs data={data.contentfulWhyUs} />
          <Features data={data.contentfulFeatures} />
          <WhyHireUs data={data.contentfulWhyHireUs} />
          <Freelancing data={data.contentfulFreelancing} />
          <OurTeam data={data.contentfulOurTeam} />
          <ContactUs data={data.contentfulContact} />
        </Layout>
      </LocaleContext.Provider>
    )
  }
}

export default IndexPage

export const query = graphql`
  query indexPageQuery($locale: String) {
    contentfulSeo(node_locale: { eq: $locale }) {
      ...Seo
    }
    contentfulNavbar(node_locale: { eq: $locale }) {
      ...Navbar
    }
    contentfulHeader(node_locale: { eq: $locale }) {
      ...Header
    }
    contentfulSocialMedia(node_locale: { eq: $locale }) {
      ...SocialMedia
    }
    contentfulWhyUs(node_locale: { eq: $locale }) {
      ...WhyUs
    }
    contentfulFeatures(node_locale: { eq: $locale }) {
      ...Features
    }
    contentfulWhyHireUs(node_locale: { eq: $locale }) {
      ...WhyHireUs
    }
    contentfulFreelancing(node_locale: { eq: $locale }) {
      ...Freelancing
    }
    contentfulOurTeam(node_locale: { eq: $locale }) {
      ...OurTeam
    }
    contentfulContact(node_locale: { eq: $locale }) {
      ...ContactUs
    }
  }
`
