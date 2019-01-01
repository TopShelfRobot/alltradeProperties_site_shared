import React from 'react'

import CTAButton from './cta-button'

const style = {
  width: '100%',
}

const unitQuery = UnitID => (UnitID ? '?UnitID=' + UnitID : '')
const applyNowUrl = process.env.GATSBY_APPLY_NOW_URL

const ApplyCTAButton = props => (
  <CTAButton href={`${applyNowUrl}${unitQuery(props.UnitID)}`} style={style}>
    Apply Now
  </CTAButton>
)

export default ApplyCTAButton
