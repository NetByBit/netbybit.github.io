import React from 'react'

import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col, Container, Button } from 'reactstrap'

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        contentfulHeader {
          subtitle
          description
          backgroundImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="header" id="header">
        <Img
          fluid={data.contentfulHeader.backgroundImage.fluid}
          style={{ height: '100vh' }}
          imgStyle={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
        <div className="overlay">
          <Container>
            <Row className="centering-vh">
              <Col md="8" lg="6">
                <h1 className="text-uppercase text-md-left text-center">
                  Web
                  <span className="text-primary">Point</span>
                </h1>
                <p className="lead text-uppercase text-md-left text-center">
                  {data.contentfulHeader.description}
                </p>
                <p className="text-md-left text-center">
                  {data.contentfulHeader.subtitle}
                </p>
                <Button
                  tag="a"
                  color="light"
                  outline
                  href="https://web-point.github.io/Template-2/"
                  className="d-block d-md-inline-block mt-md-3 mt-5"
                >
                  View
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )}
  />
)

export default Header
