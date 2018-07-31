import React from 'react'
import chunck from 'lodash/chunk'
import styled from 'styled-components'
import Section from './ui/section'

const Icon = styled.i.attrs({
  className: 'colored',
})``

const icons = [
  'devicon-html5-plain',
  'devicon-css3-plain',
  'devicon-javascript-plain',
  'devicon-laravel-plain',
  'devicon-sass-original',
  'devicon-react-original',
]

const WhyUs = () => (
  <Section className="sublist" id="why">
    <div className="row">
      <div className="col-md">
        <div className="list-info">
          <h3 className="h1 section-head head-border text-uppercase">
            Why us?
          </h3>
          <p className="section-desc">
            You don't have to overpay a PROFESSIONAL to get your work done, you
            could develop a professional website or landing page using just
            those? check our page to make sure yourself!
          </p>
        </div>
      </div>
      <div className="col-md icons">
        {chunck(icons, 3).map(row => (
          <div className="row text-center" key={row}>
            {row.map(icon => (
              <div className="col-4" key={icon}>
                <Icon className={icon} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Section>
)

export default WhyUs
