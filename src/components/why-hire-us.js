import React from 'react'

import { Row, Col } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'

import Section from './ui/section'

const Feature = ({ icon, title, description }) => (
  <Col md className="feat-box">
    <i className={'fa-2x ' + icon} />
    <h3 className="feat-head">{title}</h3>
    <p className="text-muted">{description}</p>
  </Col>
)

const WhyHireUs = ({ t, locale }) => (
  <StaticQuery
    query={graphql`
      query WhyHireUsQuery {
        en: contentfulWhyHireUs(node_locale: { eq: "en-US" }) {
          title
          description
          weOffer
          thoughtfulDesign
          thoughtfulDesignDescription
          wellCrafted
          wellCraftedDescription
          easyToCustomize
          easyToCustomizeDescription
        }
        ar: contentfulWhyHireUs(node_locale: { eq: "ar" }) {
          title
          description
          weOffer
          thoughtfulDesign
          thoughtfulDesignDescription
          wellCrafted
          wellCraftedDescription
          easyToCustomize
          easyToCustomizeDescription
        }
      }
    `}
    render={data => {
      const langData = locale === 'ar' ? data.ar : data.en

      return (
        <Section
          className="awesome text-center"
          title={langData.title}
          description={
            <>
              {langData.description}
              <br />
              <span className="text-primary">{langData.weOffer}</span>
            </>
          }
        >
          <Row>
            <Feature
              icon="far fa-lightbulb"
              title={langData.thoughtfulDesign}
              description={langData.thoughtfulDesignDescription}
            />
            <Feature
              icon="far fa-keyboard"
              title={langData.wellCrafted}
              description={langData.wellCraftedDescription}
            />
            <Feature
              icon="fas fa-bolt"
              title={langData.easyToCustomize}
              description={langData.easyToCustomizeDescription}
            />
          </Row>
        </Section>
      )
    }}
  />
)

export default WhyHireUs
