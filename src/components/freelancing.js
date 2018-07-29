import React from 'react'

import Freelancer from '../img/freelancer.svg'
import Upwork from '../img/upwork.svg'
import PPH from '../img/pph.svg'

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
  <div className="freelancing section">
    <div className="container">
      <h2 className="h1 head-border-center text-uppercase text-center">
        Find Us On
      </h2>
      <div className="row align-items-center">
        {links.map(link => (
          <div className="col-sm mb-4" key={link.name}>
            <a href={link.link}>
              <img src={link.img} alt={link.name} className="img-fluid" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Freelancing
