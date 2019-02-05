import React from 'react'
import UnitImage from './unit-image'
import Skeleton from 'react-loading-skeleton'

import './unit-listing.scss'

const UnitListing = ({ unit, isLoading, ...props }) => {
  const description = unit.unitDesc || unit.Comment || ''
  return (
    <article className="unit-listing">
      <UnitImage url={`/detail?UnitID=${unit.unitID}`} imgUrl={`url(${unit.imgUrl})`} isLoading={isLoading} />
      <div className="description">
        {unit.title && <h6>{isLoading ? <Skeleton /> : unit.title}</h6>}
        <h6>{isLoading ? <Skeleton count={2} /> : unit.fullAddress}</h6>
        <p>{isLoading ? <Skeleton count={4} /> : description.slice(0, 50)}</p>
      </div>
      <div className="tools">
        <p className="price">${unit.rent}</p>
        <a href={`/detail?UnitID=${unit.unitID}`} className="button" target="_blank" rel="noopener noreferrer">
          See more
        </a>
      </div>
    </article>
  )
}
export default UnitListing
