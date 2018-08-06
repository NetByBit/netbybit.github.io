import React from 'react'

import { Row, Col } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'

import Freelancer from '../img/freelancer.svg'
import Upwork from '../img/upwork.svg'
import PPH from '../img/pph.svg'
import Section from './ui/section'

const links = [
  {
    name: 'Freelancer',
    link: 'https://www.freelancer.com/u/MostafaDaoud',
    img: Freelancer,
  },
  {
    name: 'Upwork',
    link: 'https://www.upwork.com/freelancers/~011ed407c20ef1c7b0',
    img: Upwork,
  },
  {
    name: 'PeoplePerHour',
    link:
      'https://www.peopleperhour.com/freelancer/mostafa/web-designer/1774022',
    img: PPH,
  },
]

const Freelancing = ({ locale }) => (
  <StaticQuery
    query={graphql`
      query FreelancingQuery {
        en: contentfulFreelancing(node_locale: { eq: "en-US" }) {
          title
        }
        ar: contentfulFreelancing(node_locale: { eq: "ar" }) {
          title
        }
      }
    `}
    render={data => {
      const langData = locale === 'ar' ? data.ar : data.en
      return (
        <Section className="freelancing" title={langData.title}>
          <Row className="align-items-center">
            {links.map(link => (
              <Col sm className="mb-4" key={link.name}>
                <a href={link.link}>
                  <img src={link.img} alt={link.name} className="img-fluid" />
                </a>
              </Col>
            ))}
          </Row>
        </Section>
      )
    }}
  />
)

export default Freelancing
