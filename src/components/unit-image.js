import React from 'react'

import './unit-image.scss'

const UnitImage = props => (
  <figure className="unit-image" style={{ backgroundImage: props.imgUrl }}>
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      See more
    </a>
  </figure>
)

export default UnitImage
