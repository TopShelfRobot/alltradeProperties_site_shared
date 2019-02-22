import React from 'react'
import ImageGallery from 'react-image-gallery'

import 'react-image-gallery/styles/css/image-gallery.css'

export default class CarouselGallery extends React.Component {
  render() {
    const { images: imagesProp, className: classNameProp } = this.props

    const images = imagesProp.map(image => ({
      original: image.originalImg,
      thumbnail: image.originalImg,
    }))

    return (
      <ImageGallery
        items={images}
        additionalClass={classNameProp}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    )
  }
}
