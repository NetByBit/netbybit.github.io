import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Row, Col, Container, Button } from 'reactstrap'

import { withLocale } from '../localeContext'

const Header = ({ data, locale }) => {
  const textDir = locale === 'ar' ? 'text-md-right' : 'text-md-left'
  return (
    <div className="header" id="header">
      <Img
        fluid={data.backgroundImage.fluid}
        style={{ height: '100vh' }}
        imgStyle={{ objectFit: 'cover', objectPosition: 'top center' }}
      />
      <div className="overlay">
        <Container>
          <Row className="centering-vh">
            <Col md="8" lg="6">
              <h1 className={`text-uppercase text-center ${textDir}`}>
                Net
                <span className="text-primary">By</span>
                Bit
              </h1>
              <p className={`lead text-uppercase text-center ${textDir}`}>
                {data.description}
              </p>
              <p className={`text-center ${textDir}`}>{data.subtitle}</p>
              <Button
                tag="a"
                color="light"
                outline
                href="https://web-point.github.io/Template-2/"
                className="d-block d-md-inline-block mt-md-3 mt-5"
              >
                {data.buttonText}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default withLocale(Header)

export const headerFragment = graphql`
  fragment Header on ContentfulHeader {
    subtitle
    description
    backgroundImage {
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    buttonText
  }
`
