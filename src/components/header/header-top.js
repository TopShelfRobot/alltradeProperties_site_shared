import React from 'react'
import ClassedComponent from '../tools/classed-component'
import PlainLink from '../plainLink'
import { WarningIcon, PhoneIcon, EmailIcon } from '../icons'

import './header-top.scss'

const Container = ClassedComponent('div', 'container')
const Row = props => <div className="row" {...props} />
const LeftBox = props => <div className="left-box" {...props} />
const RightBox = props => <div className="right-box" {...props} />
const Line = props => <div style={{ display: 'inline-block' }} {...props} />

const PhoneNumber = props => <PlainLink href={`tel:${props.children}`} {...props} />
const EmailAddress = props => <PlainLink href={`mailto:${props.children}`} {...props} />

const TopHeader = props => (
  <div className="header-top">
    <Container>
      <Row>
        <LeftBox>
          <Line className="hide@mobile hide@tablet">After-hours Maintenance Emergency:</Line>
          <Line>
            <WarningIcon />
            <PhoneNumber>(502) 299-3798</PhoneNumber>
          </Line>
        </LeftBox>
        <RightBox>
          <PhoneIcon />
          <PhoneNumber>{props.phone}</PhoneNumber>
          {/* </RightBox>
        <RightBox> */}
          <EmailIcon />
          <EmailAddress>{props.email}</EmailAddress>
        </RightBox>
      </Row>
    </Container>
  </div>
)

export default TopHeader
