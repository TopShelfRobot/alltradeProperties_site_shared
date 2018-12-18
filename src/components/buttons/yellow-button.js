import React from 'react'
import cn from 'classnames'
import LargeButton from './large-button'

import './yellow-button.scss'

const YellowButton = ({ className: classNameProp, ...props }) => (
  <LargeButton className={cn('yellow-button', classNameProp)} {...props} />
)

export default YellowButton
