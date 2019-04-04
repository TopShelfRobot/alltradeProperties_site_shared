import React from 'react'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExclamationTriangle as Warning,
  faPhone as Phone,
  faEnvelope as Envelope,
  faBars as Bars,
  faUser as User,
  faUsers as Users,
  faHome as House,
  faCalendarAlt as Calendar,
  faFileSignature as Apply,
  faCreditCard as CreditCard,
  faWrench as Wrench,
} from '@fortawesome/free-solid-svg-icons'

import './service.scss'
import bgImageUrl from '../images/ico-goals-hor.png'

const positions = {
  results: 0,
  rocket: -90,
  place: -180,
  chart: -270,
  money: -360,
  dialog: -450,
  rent: -540,
  sqft: -630,
}

const icons = {
  wrench: Wrench,
  credit: CreditCard,
  apply: Apply,
}

const iconSize = 42
const iconMargin = (90 - iconSize) / 2
const iconStyle = { width: iconSize, height: iconSize, margin: iconMargin }

const ServiceIconImage = props => {
  if (props.image)
    return (
      <div
        className="service-icon-image"
        style={{ backgroundPositionX: `${positions[props.image]}px`, backgroundImage: `url(${bgImageUrl})` }}
      />
    )

  if (props.icon)
    return (
      <div className="service-icon-icon">
        <FontAwesomeIcon style={{ ...iconStyle, color: '#797979' }} icon={icons[props.icon]} />
        <FontAwesomeIcon style={{ ...iconStyle, color: '#ffd80f' }} icon={icons[props.icon]} />
        {/* <div className="service-icon-wrapper">
        </div> */}
      </div>
    )
}

const Service = props => {
  const Root = props.href ? p => <a {...p} /> : p => <div {...p} />

  return (
    <Root className={cn('service-offering', { bordered: props.border })} href={props.href}>
      <div>
        <div className="service-icon">
          <ServiceIconImage image={props.image} icon={props.icon} />
        </div>
      </div>

      <div className="service-content-box">
        {props.title && <h2>{props.title}</h2>}
        {props.subtitle && <h4>{props.subtitle}</h4>}
        {props.content && <p>{props.content}</p>}
      </div>
    </Root>
  )
}
export default Service
