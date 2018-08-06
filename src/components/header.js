import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col, Container, Button } from 'reactstrap'

const Header = ({ locale }) => {
  const textDir = locale === 'ar' ? 'text-md-right' : 'text-md-left'
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          en: contentfulHeader(node_locale: { eq: "en-US" }) {
            subtitle
            description
            backgroundImage {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            buttonText
          }
          ar: contentfulHeader(node_locale: { eq: "ar" }) {
            subtitle
            description
            backgroundImage {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            buttonText
          }
        }
      `}
      render={data => {
        const langData = locale === 'ar' ? data.ar : data.en
        return (
          <div className="header" id="header">
            <Img
              fluid={langData.backgroundImage.fluid}
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
                      {langData.description}
                    </p>
                    <p className={`text-center ${textDir}`}>
                      {langData.subtitle}
                    </p>
                    <Button
                      tag="a"
                      color="light"
                      outline
                      href="https://web-point.github.io/Template-2/"
                      className="d-block d-md-inline-block mt-md-3 mt-5"
                    >
                      {langData.buttonText}
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        )
      }}
    />
  )
}

export default Header
