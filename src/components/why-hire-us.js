import React from 'react'

import { Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'

import Section from './ui/section'

const Feature = ({ icon, title, description }) => (
  <Col md className="feat-box">
    <i className={'fa-2x ' + icon} />
    <h3 className="feat-head">{title}</h3>
    <p className="text-muted">{description}</p>
  </Col>
)

const WhyHireUs = ({ data }) => (
  <Section
    className="awesome text-center"
    title={data.title}
    description={
      <>
        {data.description}
        <br />
        <span className="text-primary">{data.weOffer}</span>
      </>
    }
  >
    <Row>
      <Feature
        icon="far fa-lightbulb"
        title={data.thoughtfulDesign}
        description={data.thoughtfulDesignDescription}
      />
      <Feature
        icon="far fa-keyboard"
        title={data.wellCrafted}
        description={data.wellCraftedDescription}
      />
      <Feature
        icon="fas fa-bolt"
        title={data.easyToCustomize}
        description={data.easyToCustomizeDescription}
      />
    </Row>
  </Section>
)

export default WhyHireUs

export const whyHireUsFragment = graphql`
  fragment WhyHireUs on ContentfulWhyHireUs {
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
`
