import React from 'react'

import UnitImage from './unit-image'

import './featured-unit.scss'

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

    <UnitImage url={`/single-property/${unit.unitID}`} imgUrl={`url(${unit.imgUrl})`} />
    <div className="description">
      <div className="fade-bottom" />
      <h6>{unit.address}</h6>
      <br />
      <p>{unit.unitDesc}</p>
    </div>
    <div className="tools">
      <p className="price">${unit.rent}</p>
      <a href={`/single-property/${unit.unitID}`} className="button">
        See more
      </a>
    </div>
  </article>
)

export default FeaturedUnit
