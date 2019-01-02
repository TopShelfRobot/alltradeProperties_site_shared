import React from 'react'
import cn from 'classnames'

import Row from './row'
import './callout-box.scss'

const CalloutBox = ({ icon: Icon, pre, stat, post, className: classNameProp, ...props }) => (
  <div className={cn('callout-box', classNameProp)}>
    <Row className="callout-content">
      <div className="col-md-6 callout-icon">
        <Icon />
      </div>

      <div className="col-md-6 callout-text">
        {!!pre && pre}
        <span className="stat">{stat}</span>
        {!!post && post}
      </div>
    </Row>
  </div>
)
// const CalloutBox = ({ icon: Icon, pre, stat, post, className: classNameProp, ...props }) => (
//   <div className={cn('callout-box', classNameProp)}>
//     <div className="callout-content">
//       <div className="callout-icon">
//         <Icon />
//       </div>

//       <div className="callout-text">
//         {!!pre && pre}
//         <span className="stat">{stat}</span>
//         {!!post && post}
//       </div>
//     </div>
//   </div>
// )

export default CalloutBox
