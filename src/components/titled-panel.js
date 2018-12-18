import React from 'react'
import cn from 'classnames'

import './titled-panel.scss'

const TitledPanel = ({ title, titleIcon: TitleIcon, className: classNameProp, children, ...props }) => (
  <div className={cn('titled-panel', classNameProp)}>
    {title && (
      <h5 className="small-title">
        {TitleIcon && <TitleIcon />} {title}
      </h5>
    )}
    <div className="content">{children}</div>
  </div>
)

export default TitledPanel
