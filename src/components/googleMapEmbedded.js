import React from 'react'

const GoogleMapEmbedded = props => (
  <div className="google-map-embeded">
    <iframe
      width="100%"
      height={props.height ? `${props.height}px` : '210px'}
      frameBorder="0"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyArOCMW0dC_N1r0t4-42DNfvkT5svCoxX4&q=${encodeURIComponent(
        props.address
      )}&zoom=15`}
      allowFullScreen
      title="Embedded property map"
    />
  </div>
)

export default GoogleMapEmbedded
