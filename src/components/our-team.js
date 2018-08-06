import React from 'react'

import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'reactstrap'

import Section from './ui/section'

const OurTeam = ({ locale }) => (
  <StaticQuery
    query={graphql`
      query TeamQuery {
        en: contentfulOurTeam(node_locale: { eq: "en-US" }) {
          title
          amrName
          mostafaName
          amrImage {
            fixed(width: 280, height: 280) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
          mostafaImage {
            fixed(width: 280, height: 280) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
        ar: contentfulOurTeam(node_locale: { eq: "ar" }) {
          title
          amrName
          mostafaName
          amrImage {
            fixed(width: 280, height: 280) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
          mostafaImage {
            fixed(width: 280, height: 280) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const langData = locale === 'ar' ? data.ar : data.en

      const team = [
        {
          name: langData.amrName,
          facebook: 'https://www.facebook.com/mero.diro',
          github: 'https://github.com/merodiro',
          image: langData.amrImage,
        },
        {
          name: langData.mostafaName,
          facebook: 'https://www.facebook.com/MOSTA.DAOUD',
          github: 'https://github.com/MostaDaoud',
          image: langData.mostafaImage,
        },
      ]
      return (
        <Section
          className="our-team section"
          id="our-team"
          title={langData.title}
        >
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

export default OurTeam
