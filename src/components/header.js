import React from 'react'

import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col, Container, Button } from 'reactstrap'
import { translate } from 'react-i18next'

const Header = ({ i18n, t }) => {
  const textDir = i18n.language === 'ar' ? 'text-md-right' : 'text-md-left'
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          backgroundImage: file(relativePath: { eq: "design-min.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => (
        <div className="header" id="header">
          <Img
            fluid={data.backgroundImage.childImageSharp.fluid}
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
                    {t('description')}
                  </p>
                  <p className={`text-center ${textDir}`}>{t('subtitle')}</p>
                  <Button
                    tag="a"
                    color="light"
                    outline
                    href="https://web-point.github.io/Template-2/"
                    className="d-block d-md-inline-block mt-md-3 mt-5"
                  >
                    {t('view')}
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    />
  )
}

export default translate('header')(Header)
