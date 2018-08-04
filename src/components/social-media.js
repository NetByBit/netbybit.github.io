import React from 'react'

import styled from 'styled-components'
import { Row, Col } from 'reactstrap'
import { translate } from 'react-i18next'

import Section from './ui/section'

const Icon = styled.i.attrs({
  className: 'fab fa-3x fa-fw',
})``

const SocialMedia = ({ t, i18n }) => {
  const marginDir = i18n.language === 'ar' ? 'mr-auto' : 'ml-auto'

  return (
    <Section className="social-section">
      <Row>
        <Col md="4">
          <h4>{t('title')}</h4>
          <p className="text-muted">{t('subtitle')}</p>
        </Col>
        <Col md="4" className={marginDir}>
          <a href="#">
            <Icon className="fa-facebook-f" />
          </a>
          <a href="#">
            <Icon className="fa-instagram" />
          </a>
          <a href="https://github.com/NetByBit">
            <Icon className="fa-github" />
          </a>
        </Col>
      </Row>
    </Section>
  )
}

export default translate('social')(SocialMedia)
