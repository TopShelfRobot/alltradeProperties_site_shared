import React from 'react'

import './self-showing-cta.scss'
import { SelfShowingButton } from './buttons'

export default class TenantTurner extends React.Component {
  render() {
    return (
      <div className="self-showing-cta">
        <h4>Looking for an apartment in Indiana?</h4>
        <p>Save a trip across the river and schedule a self showing here!</p>
        <SelfShowingButton />
      </div>
    )
  }
}
