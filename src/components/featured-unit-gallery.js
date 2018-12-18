import React from 'react'

import Row from './row'
import FeaturedUnit from './featured-unit'
import './featured-unit-gallery.scss'

const FeaturedUnitGallery = ({ units, ...props }) => (
  <Row className="featured-unit-gallery">
    {(units || []).slice(0, 3).map(unit => (
      <div key={unit.UnitID} className="col-12 col-lg-4 featured-unit-container">
        <FeaturedUnit unit={unit} />
      </div>
    ))}
  </Row>
)

export default FeaturedUnitGallery
