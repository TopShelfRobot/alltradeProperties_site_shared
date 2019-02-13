import React from 'react'

import CTAButton from './cta-button'

const style = {
  width: '100%',
}

const SelfShowingButton = props => (
  <CTAButton href="/self-showing" style={style}>
    Schedule a Self-Showing
  </CTAButton>
)

export default SelfShowingButton
