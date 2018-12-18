import React from 'react'
import cn from 'classnames'

const ClassedComponent = (Component, baseClassName) => ({ className: classNameProp, ...props }) => (
  <Component className={cn(baseClassName, classNameProp)} {...props} />
)

export default ClassedComponent
