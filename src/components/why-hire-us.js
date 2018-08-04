import React from 'react'

import { Row, Col } from 'reactstrap'
import { translate } from 'react-i18next'

import Section from './ui/section'

const Feature = ({ icon, title, description }) => (
  <Col md className="feat-box">
    <i className={'fa-2x ' + icon} />
    <h3 className="feat-head">{title}</h3>
    <p className="text-muted">{description}</p>
  </Col>
)

const WhyHireUs = ({ t }) => (
  <Section
    className="awesome text-center"
    title={t('title')}
    description={
      <>
        {t('subtitle')}
        <br />
        <span className="text-primary">{t('we-offer')}</span>
      </>
    }
  >
    <Row>
      <Feature
        icon="far fa-lightbulb"
        title={t('thoughtful-design')}
        description={t('thoughtful-design-description')}
      />
      <Feature
        icon="far fa-keyboard"
        title={t('well-crafted')}
        description={t('well-crafted-description')}
      />
      <Feature
        icon="fas fa-bolt"
        title={t('easy-to-customize')}
        description={t('easy-to-customize-description')}
      />
    </Row>
  </Section>
)

export default translate('why-hire-us')(WhyHireUs)
