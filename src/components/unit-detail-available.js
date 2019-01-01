import React from 'react'

import './unit-detail-available.scss'

const UnitDetailAvailable = props => (
  <div className="unit-detail-available">
    <h4>Available: {props.availableWhen}</h4>
  </div>
)
export default UnitDetailAvailable
