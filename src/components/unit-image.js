import React from 'react'

import Loading from './loading'
import './unit-image.scss'

const UnitImage = ({ isLoading, ...props }) =>
  isLoading ? (
    <Loading />
  ) : (
    <figure className="unit-image" style={{ backgroundImage: props.imgUrl }}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        See more
      </a>
    </figure>
  )

export default UnitImage
