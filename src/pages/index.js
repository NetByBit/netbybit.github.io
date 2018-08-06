import React from 'react'

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

const IndexPage = ({ pageContext }) => (
  <Layout locale={pageContext.locale}>
    <Header locale={pageContext.locale} />
    <SocialMedia locale={pageContext.locale} />
    <WhyUs locale={pageContext.locale} />
    <Features locale={pageContext.locale} />
    <WhyHireUs locale={pageContext.locale} />
    <Freelancing locale={pageContext.locale} />
    <OurTeam locale={pageContext.locale} />
    <ContactUs locale={pageContext.locale} />
  </Layout>
)

export default IndexPage
