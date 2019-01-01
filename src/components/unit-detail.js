import React from 'react'

import Carousel from './unit-detail-carousel'
import Service from './service'
import Row from './row'
import GoogleMapEmbeded from './googleMapEmbedded'
import './unit-detail.scss'

function getGeneralInfo(unit) {
  const gi = [
    { label: 'ID', value: unit.UnitID },
    { label: 'Available to View', value: unit.availableWhen },
    { label: 'Available', value: unit.isVacant ? 'Yes' : 'No' },
    { label: 'Type', value: unit.type },
    { label: 'Beds/Baths', value: `${unit.beds}/${unit.baths}` },
    { label: 'Pets Alowed', value: unit.petsAllowed ? 'Yes' : 'No' },
  ]
  return gi
}

const UnitDetail = ({ unit, ...props }) => (
  <div className="unit-detail add-bottom-2 lighted">
    <Carousel images={unit.images} alt={unit.address} />

    <div className="unit-detail-content px-3">
      <Row className="">
        <div className="col-sm-4">
          <Service image="rent" title="Rent" subtitle={`$${unit.rent}`} />
        </div>
        <div className="col-sm-4">
          <Service image="results" title="Deposit" subtitle={`$${unit.deposit}`} />
        </div>
        <div className="col-sm-4">
          <Service image="sqft" title="Size" subtitle={`$${unit.sqft}`} />
        </div>
      </Row>

      {unit.moveInSpecial && (
        <div className="alert alert-info m-5" role="alert">
          <h4 className="alert-heading">Move-In Special!</h4>
          <p className="my-0">{unit.moveInSpecial}</p>
        </div>
      )}

      <Row className="">
        <div className="col-sm-4">
          <h5>Property Map</h5>
          <GoogleMapEmbeded height={175} address={unit.fullAddress} />
        </div>

        <div className="col-sm-8">
          <h5>Property Description</h5>
          <div dangerouslySetInnerHTML={{ __html: unit.unitDesc }} />
        </div>
      </Row>

      <h5 className="padded">General Info</h5>
      <Row className="mb-3">
        {getGeneralInfo(unit).map((gi, idx) => (
          <div key={`gen-info-${idx}`} className="col-sm-4 amenity">
            <span className="amenity-name">{gi.label}</span>
            <span className="amenity-data">{gi.value}</span>
          </div>
        ))}
      </Row>

      <h5 className="padded">General Amenities</h5>
      <Row className="add-bottom-2 clearfix">
        {(unit.amenities || []).map((am, idx) => (
          <div key={`amenity-${idx}`} className="col-sm-4 amenity">
            <span className="amenity-name">{am}</span>
            <span className="amenity-data">Yes</span>
          </div>
        ))}
      </Row>
    </div>
  </div>
)

export default UnitDetail
