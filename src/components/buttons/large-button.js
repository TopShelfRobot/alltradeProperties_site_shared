import React from 'react'
import cn from 'classnames'

import Button from './button'
import './large-button.scss'

const LargeButton = ({ className: classNameProp, ...props }) => (
  <Button className={cn('large-button', classNameProp)} {...props} />
)

export default LargeButton
