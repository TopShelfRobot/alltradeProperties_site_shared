import React from 'react'

import './button.scss'

const Button = ({ href, className: classNameProp, children, ...props }) => {
  return href ? (
    <a className={classNameProp} href={props.href} {...props}>
      {children}
    </a>
  ) : (
    <button className={classNameProp} {...props}>
      {children}
    </button>
  )
}

export default Button
