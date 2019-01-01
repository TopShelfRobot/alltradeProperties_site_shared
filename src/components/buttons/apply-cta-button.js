import React from 'react'

import CTAButton from './cta-button'

const applyNowUrl = process.env.GATSBY_APPLY_NOW_URL

const ApplyCTAButton = props => <CTAButton href={applyNowUrl}>Start your rental application now</CTAButton>

export default ApplyCTAButton
