import React from 'react'

const googleAPIKey = 'AIzaSyBgQyrBjywkpP8Xkw6Iy2wI57oBMjZVt1A'

// const defaults = {
//   zoom: 13,
//   width: 600,
//   height: 300,
//   maptype: 'roadmap',
// }

export const googleStaticUrl = ({ address, zoom = 13, width = 600, height = 300, maptype = 'roadmap' }) => {
  const pairs = [
    ['center', encodeURIComponent(address)],
    ['zoom', zoom],
    ['size', `${width}x${height}`],
    ['maptype', maptype],
    ['key', googleAPIKey],
  ]
  const qs = pairs.map(pair => pair.join('=')).join('&')
  return `https://maps.googleapis.com/maps/api/staticmap?${qs}`
}

const GoogleStaticImage = props => <img src={googleStaticUrl(props)} alt={props.alt || 'Static Map'} />

export default GoogleStaticImage
