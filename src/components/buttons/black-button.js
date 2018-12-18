import React from 'react'
import cn from 'classnames'

import Button from './button'
import './black-button.scss'

const BlackButton = ({ className: classNameProp, ...props }) => (
  <Button className={cn('black-button', classNameProp)} {...props} />
)

export default BlackButton
