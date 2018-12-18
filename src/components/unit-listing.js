import React from 'react'
import UnitImage from './unit-image'

import './unit-listing.scss'

const UnitListing = ({ unit, ...props }) => (
  <article className="featured-unit unit-listing">
    <UnitImage url={`/single-property/${unit.unitID}`} imgUrl={`url(${unit.imgUrl})`} />
    <div className="description">
      {!!unit.title && <h6>{unit.title}</h6>}
      <h6>{unit.fullAddress}</h6>
      <p>{unit.unitDesc.slice(0, 50)}</p>
    </div>
    <div className="tools">
      <p className="price">${unit.rent}</p>
      <a href={`/single-property/${unit.unitID}`} className="button" target="_blank" rel="noopener noreferrer">
        See more
      </a>
    </div>
  </article>
)

export default UnitListing
