import React from 'react'

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'

const GoogleMapComponent = withScriptjs(
  withGoogleMap(props => <GoogleMap defaultZoom={17} defaultCenter={{ lat: 38.243699, lng: -85.734174 }} {...props} />)
)

const GoogleMapWrapper = props => {
  const newProps = {
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyArOCMW0dC_N1r0t4-42DNfvkT5svCoxX4&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `${props.mapHeight || 400}px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    ...props,
  }

  return <GoogleMapComponent {...newProps} />
}

export default GoogleMapWrapper
