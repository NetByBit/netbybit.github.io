import React from 'react'

import { Row, Col } from 'reactstrap'

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

const Freelancing = () => (
  <Section className="freelancing" title="Find Us On">
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

export default Freelancing
