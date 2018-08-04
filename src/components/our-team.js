import React from 'react'

import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'reactstrap'
import { translate } from 'react-i18next'

import Section from './ui/section'

const OurTeam = ({ t }) => (
  <StaticQuery
    query={graphql`
      query TeamQuery {
        amr: file(relativePath: { eq: "Amr.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 280) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        mostafa: file(relativePath: { eq: "Mostafa.jpg" }) {
          childImageSharp {
            fixed(width: 280, height: 280) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const team = [
        {
          name: t('amr-name'),
          facebook: 'https://www.facebook.com/mero.diro',
          github: 'https://github.com/merodiro',
          image: data.amr.childImageSharp,
        },
        {
          name: t('mostafa-name'),
          facebook: 'https://www.facebook.com/MOSTA.DAOUD',
          github: 'https://github.com/MostaDaoud',
          image: data.mostafa.childImageSharp,
        },
      ]
      return (
        <Section className="our-team section" id="our-team" title={t('title')}>
          <Row className="justify-content-around">
            {team.map(member => (
              <Col md="5" className="person text-center" key={member.name}>
                <Row className="justify-content-md-center">
                  <Col md="8" className="col-md-8">
                    <Img
                      fixed={member.image.fixed}
                      imgStyle={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </Col>
                </Row>
                <h2>{member.name}</h2>
                <div className="icons">
                  <a href={member.github}>
                    <i className="fab fa-github fa-3x fa-fw" />
                  </a>
                  <a href={member.facebook}>
                    <i className="fab fa-facebook-f fa-3x fa-fw" />
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Section>
      )
    }}
  />
)

export default translate('our-team')(OurTeam)
