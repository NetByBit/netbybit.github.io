import React from 'react'

import { Container } from 'reactstrap'

const Sectionbody = ({ children, className, ...props }) => (
  <div className={`section ${className}`} {...props}>
    {children}
  </div>
)
const SectionTitle = ({ children, className, ...props }) => (
  <h2 className={`section-head h1 text-uppercase ${className}`} {...props}>
    {children}
  </h2>
)

const Section = ({ title, dir, children, description, ...props }) => {
  const titleClass =
    dir === 'center' ? 'head-border-center text-center' : 'head-border'
  return (
    <Sectionbody {...props}>
      <Container>
        {title && <SectionTitle className={titleClass}>{title}</SectionTitle>}
        {description && (
          <p className="section-desc text-center">{description}</p>
        )}
        {children}
      </Container>
    </Sectionbody>
  )
}

Section.defaultProps = {
  dir: 'center',
}

export default Section
