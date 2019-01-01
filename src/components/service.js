import React from 'react'

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

const Service = props => (
  <div className="service-offering">
    <div>
      <a
        href={props.href}
        className="service-icon"
        style={{ backgroundPositionX: `${positions[props.image]}px`, backgroundImage: `url(${bgImageUrl})` }}
      >
        &nbsp;
      </a>
    </div>

    <div>
      <h2>{props.title}</h2>
      {props.subtitle && <h4>{props.subtitle}</h4>}

      <p>{props.content}</p>
    </div>
  </div>
)

export default Service
