import React from 'react'
import PropTypes from 'prop-types'
import RowGallery from './RowGallery'
import Lightbox from 'react-images'
import CarouselGallery from './CarouselGallery'

export default class PropertyGallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lightboxIsOpen: this.props.isOpen,
      currentImage: 0,
      images: [],
      imagesPreloaded: 0,
      imagesPreloadDone: false,
    }

    this.preloadImages = this.preloadImages.bind(this)
  }

  openLightbox = imageIndex => this.setState({ lightboxIsOpen: true, currentImage: imageIndex })
  closeLightbox = () => this.setState({ lightboxIsOpen: false, currentImage: 0 })
  handleClickNext = () => this.setState({ currentImage: this.state.currentImage + 1 })
  handleClickPrev = () => this.setState({ currentImage: this.state.currentImage - 1 })

  handleImageClick = index => this.openLightbox(index)

  componentDidUpdate(prevProps) {
    if (prevProps.loading && !this.props.loading) {
      this.preloadImages(this.props.images)
    }
  }

  preloadImages = async srcs => {
    if (this.state.imagesPreloadDone) return

    const images = srcs.map((src, index) => ({ src, index, thumbnail: src, originalImg: src }))

    await Promise.all(
      images.map(
        image =>
          new Promise(resolve => {
            const i = new Image()
            i.onload = () => {
              const aspectRatio = i.width / i.height
              images[image.index].aspectRatio = aspectRatio
              images[image.index].thumbnailWidth = 300
              images[image.index].thumbnailHeight = 300 * aspectRatio
              resolve(image)
            }
            i.src = image.src
          })
      )
    )

    this.setState({ images, imagesPreloadDone: true })
  }

  render() {
    const { images, imagesPreloadDone } = this.state
    const { loading, preserveMainAspectRatio } = this.props
    const rowHeight = 180
    const margin = 2

    if (loading || !imagesPreloadDone) return <span>loading...</span>

    const mainImageAspectRatio = preserveMainAspectRatio ? images[0].aspectRatio : 1

    return (
      <div
        style={{
          display: 'block',
          minHeight: '1px',
          width: '100%',
          border: '1px solid #ddd',
          overflow: 'auto',
        }}
      >
        <RowGallery
          className="d-none d-md-block"
          images={images}
          rowHeight={rowHeight}
          margin={margin}
          maxRows={2}
          onImageClick={this.handleImageClick}
          mainImageAspectRatio={mainImageAspectRatio}
        />
        <CarouselGallery images={images} className="d-block d-md-none" />
        <Lightbox
          images={images}
          onClose={this.closeLightbox}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickNext={this.handleClickNext}
          onClickPrev={this.handleClickPrev}
        />
      </div>
    )
  }
}

PropertyGallery.propTypes = {
  loading: PropTypes.bool,
  preserveMainAspectRatio: PropTypes.bool,
}

PropertyGallery.defaultProps = {
  preserveMainAspectRatio: false,
}
