import React from 'react'

import './unit-detail-title.scss'

const UnitDetailTitle = props => (
  <div className="unit-detail-title">
    {props.title && (
      <div>
        <h3>{props.title}</h3>
        <h4>{props.address}</h4>
      </div>
    )}
    {!props.title && <h3>{props.address}</h3>}
  </div>
)

export default UnitDetailTitle
