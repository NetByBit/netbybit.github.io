import React from 'react'
import styled from 'styled-components'

const Sectionbody = styled.div.attrs({ className: 'section' })``
const SectionTitle = styled.h2.attrs({
  className: 'section-head h1 text-uppercase',
})``

const Section = ({ title, dir, children, description, ...props }) => {
  const titleClass =
    dir == 'center' ? 'head-border-center text-center' : 'head-border'
  return (
    <Sectionbody {...props}>
      <div className="container">
        {title && <SectionTitle className={titleClass}>{title}</SectionTitle>}
        {description && <p className="section-desc text-center">{description}</p>}
        {children}
      </div>
    </Sectionbody>
  )
}

Section.defaultProps = {
  dir: 'center',
}

export default Section
