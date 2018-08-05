import React from 'react'

import '../styles/app.scss'
import 'devicon/devicon.css'
import 'devicon/devicon-colors.css'
import '../i18n'

import Layout from '../components/layout'
import Header from '../components/header'
import SocialMedia from '../components/social-media'
import WhyUs from '../components/why-us'
import Features from '../components/features'
import WhyHireUs from '../components/why-hire-us'
import Freelancing from '../components/freelancing'
import OurTeam from '../components/our-team'
import ContactUs from '../components/contact-us'
import setLanguageFromPage from '../setLanguageFromPage'

const IndexPage = () => (
  <Layout>
    <Header />
    <SocialMedia />
    <WhyUs />
    <Features />
    <WhyHireUs />
    <Freelancing />
    <OurTeam />
    <ContactUs />
  </Layout>
)

export default setLanguageFromPage()(IndexPage)
