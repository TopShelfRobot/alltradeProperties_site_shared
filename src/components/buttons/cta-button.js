import React from 'react'
import cn from 'classnames'

import LargeButton from './large-button'
import './cta-button.scss'

const CTAButton = ({ className: classNameProp, ...props }) => (
  <LargeButton className={cn('cta-button', classNameProp)} {...props} />
)

export default CTAButton
