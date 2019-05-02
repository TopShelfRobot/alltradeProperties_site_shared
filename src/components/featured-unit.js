import React from 'react'

import UnitImage from './unit-image'
import FadeBottom from './FadeBottom'

import './featured-unit.scss'

function bedBathText(unit) {
  return unit.UnitType && unit.UnitType.Name === 'Studio' ? 'Studio' : `${unit.Bedrooms}BR/${unit.Bathrooms}BA`
}

const FeaturedUnit = ({ unit, ...props }) => (
  <article className="featured-unit">
    {unit.moveInSpecial ? (
      <div className="ribbon yellow">
        <span>SPECIAL</span>
      </div>
    ) : (
      <div className="ribbon red">
        <span>HOT</span>
      </div>
    )}

    <UnitImage url={`/detail?UnitID=${unit.unitID}`} imgUrl={`url(${unit.imgUrl})`} />
    <div className="description">
      <FadeBottom />
      <h6>{unit.address}</h6>
      <br />
      <p>{unit.unitDesc}</p>
    </div>
    <div className="tools">
      <p className="price">
        ${unit.rent} | {bedBathText(unit)}
      </p>
      <a href={`/detail?UnitID=${unit.unitID}`} className="button">
        See more
      </a>
    </div>
  </article>
)

export default FeaturedUnit
