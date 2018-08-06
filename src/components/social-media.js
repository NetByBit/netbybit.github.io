import React from 'react'
import { Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'

import Section from './ui/section'

const Icon = ({ className }) => <i className={`fab fa-3x fa-fw ${className}`} />

const SocialMedia = ({ locale, data }) => {
  const marginDir = locale === 'ar' ? 'mr-auto' : 'ml-auto'
  return (
    <Section className="social-section">
      <Row>
        <Col md="4">
          <h4>{data.title}</h4>
          <p className="text-muted">{data.subtitle}</p>
        </Col>
        <Col md="4" className={marginDir}>
          <a href={data.facebookLink}>
            <Icon className="fa-facebook-f" />
          </a>
          <a href={data.instagramLink}>
            <Icon className="fa-instagram" />
          </a>
          <a href={data.githubLink}>
            <Icon className="fa-github" />
          </a>
        </Col>
      </Row>
    </Section>
  )
}

export default SocialMedia

export const socialMediaFragment = graphql`
  fragment SocialMedia on ContentfulSocialMedia {
    title
    subtitle
    githubLink
    instagramLink
    facebookLink
  }
`
