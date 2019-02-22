import PropTypes from 'prop-types'
import styled from 'styled-components'
import React, { Component } from 'react'
import Image from './Image.jsx'

const MainImage = styled.div`
  height: ${props => (props.rowHeight + props.margin) * 2}px;
  width: ${props => (props.rowHeight + props.margin) * 2 * props.aspectRatio}px;
  margin: ${props => props.margin}px;
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  float: left;
  cursor: pointer;
`

const GalleryWrapper = styled.div`
  position: relative;
  height: ${props => (props.rowHeight + props.margin + props.margin) * 2}px;
  overflow-x: hidden;
`
const ImageContainer = styled.div`
  position: absolute;
  width: ${props => props.width}px;
  left: -${props => props.offset}px;
  transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
`
const SlideButton = styled.button`
  border: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.25);

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
  }

  &,
  &:active,
  &:active:focus,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`
const SlideRightButton = styled(SlideButton)`
  position: absolute;
  right: 0;
`
const SlideLeftButton = styled(SlideButton)`
  position: absolute;
  left: 0;
`

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: this.props.images,
      thumbnails: [],
      lightboxIsOpen: this.props.isOpen,
      currentImage: this.props.currentImage,
      containerWidth: 0,
      containerOffset: 0,
      maxOffset: 0,
    }

    this.wrapperRef = React.createRef()

    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    this.setContainerSize(this.props)
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (this.state.images !== np.images && np.images.length) {
      this.setContainerSize(np)
    }
  }

  setContainerSize = np => {
    const wrapperWidth = this.wrapperRef.current.clientWidth
    const containerWidth = this.calculateContainerWidth(np.images, np.rowHeight, np.margin, np.mainImageAspectRatio)
    const maxOffset = containerWidth > wrapperWidth ? containerWidth - wrapperWidth : 0

    this.setState({
      images: np.images,
      containerWidth,
      maxOffset,
    })
  }

  componentDidUpdate() {
    if (!this._gallery) return
    if (this._gallery.clientWidth !== this.state.containerWidth) {
      this.onResize()
    }
  }

  onResize() {
    if (!this._gallery) return
    this.setState({
      containerWidth: Math.floor(this._gallery.clientWidth),
      thumbnails: this.renderThumbs(this._gallery.clientWidth),
    })
  }

  calculateCutOff(len, delta, items) {
    var cutoff = []
    var cutsum = 0
    for (var i in items) {
      var item = items[i]
      var fractOfLen = item.scaletwidth / len
      cutoff[i] = Math.floor(fractOfLen * delta)
      cutsum += cutoff[i]
    }

    var stillToCutOff = delta - cutsum
    while (stillToCutOff > 0) {
      for (i in cutoff) {
        cutoff[i]++
        stillToCutOff--
        if (stillToCutOff < 0) break
      }
    }
    return cutoff
  }

  calculateContainerWidth(images, rowHeight, margin, mainImageAspectRatio) {
    const mainWidth = this.getMainImageWidth()
    const widths = images.slice(1).map(image => rowHeight * image.aspectRatio + margin + margin)
    const halfWidth = widths.reduce((acc, w) => acc + w, 0) / 2
    const containerWidth = widths.reduce((acc, w) => acc + (acc >= halfWidth ? 0 : w), 0)
    return mainWidth + containerWidth
  }

  setThumbScale(item) {
    item.scaletwidth = Math.floor(this.props.rowHeight * (item.thumbnailWidth / item.thumbnailHeight))
  }

  slideRight = () => {
    const step = this.getSlideStep()
    const { containerOffset, maxOffset } = this.state
    const remainingOffset = maxOffset - containerOffset

    const offset = step <= remainingOffset ? step : remainingOffset
    this.setState({ containerOffset: containerOffset + offset })
  }

  slideLeft = () => {
    const step = this.getSlideStep()
    const { containerOffset } = this.state
    const offset = step < containerOffset ? step : containerOffset

    this.setState({ containerOffset: containerOffset - offset })
  }

  getSlideStep = () => this.getMainImageWidth()

  getMainImageWidth = () => {
    const { rowHeight, margin, mainImageAspectRatio } = this.props
    return (rowHeight + margin) * 2 * mainImageAspectRatio + 2 * margin
  }

  render() {
    const { rowHeight, margin, images, mainImageAspectRatio, onImageClick, className: classNameProp } = this.props
    const { containerWidth, containerOffset, maxOffset } = this.state

    const canSlideRight = containerOffset < maxOffset
    const canSlideLeft = containerOffset > 0

    var rowImages = images.slice(1).map((item, idx) => {
      return (
        <Image
          key={'Image-' + idx + '-' + item.src}
          item={item}
          index={idx}
          margin={margin}
          height={rowHeight}
          isSelectable={false}
          onClick={() => onImageClick(item.index)}
          onSelectImage={this.onSelectImage}
          tagStyle={this.props.tagStyle}
          tileViewportStyle={this.props.tileViewportStyle}
          thumbnailStyle={this.props.thumbnailStyle}
          thumbnailImageComponent={this.props.thumbnailImageComponent}
        />
      )
    })

    return (
      <GalleryWrapper className={classNameProp} rowHeight={rowHeight} margin={margin} ref={this.wrapperRef}>
        <ImageContainer width={containerWidth} offset={containerOffset}>
          <MainImage
            rowHeight={rowHeight}
            aspectRatio={mainImageAspectRatio}
            margin={margin}
            src={images[0].originalImg}
            onClick={() => onImageClick(0)}
          />
          {rowImages}
        </ImageContainer>
        {canSlideRight && <SlideRightButton onClick={this.slideRight} />}
        {canSlideLeft && <SlideLeftButton onClick={this.slideLeft} />}
      </GalleryWrapper>
    )
  }
}

Gallery.displayName = 'Gallery'

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      nano: PropTypes.string,
      alt: PropTypes.string,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        })
      ),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
      isSelected: PropTypes.bool,
      thumbnailCaption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ).isRequired,
  rowHeight: PropTypes.number,
  margin: PropTypes.number,
  mainImageAspectRatio: PropTypes.number,
  onClickThumbnail: PropTypes.func,
  lightboxWillOpen: PropTypes.func,
  lightboxWillClose: PropTypes.func,
  enableLightbox: PropTypes.bool,
  backdropClosesModal: PropTypes.bool,
  currentImage: PropTypes.number,
  preloadNextImage: PropTypes.bool,
  customControls: PropTypes.arrayOf(PropTypes.node),
  currentImageWillChange: PropTypes.func,
  enableKeyboardInput: PropTypes.bool,
  imageCountSeparator: PropTypes.string,
  isOpen: PropTypes.bool,
  onClickImage: PropTypes.func,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showImageCount: PropTypes.bool,
  lightboxWidth: PropTypes.number,
  tileViewportStyle: PropTypes.func,
  thumbnailStyle: PropTypes.func,
  showLightboxThumbnails: PropTypes.bool,
  onClickLightboxThumbnail: PropTypes.func,
  tagStyle: PropTypes.object,
  thumbnailImageComponent: PropTypes.func,
}

Gallery.defaultProps = {
  enableImageSelection: true,
  rowHeight: 180,
  margin: 2,
  mainImageAspectRatio: 1,
  enableLightbox: true,
  backdropClosesModal: false,
  currentImage: 0,
  preloadNextImage: true,
  enableKeyboardInput: true,
  imageCountSeparator: ' of ',
  isOpen: false,
  showCloseButton: true,
  showImageCount: true,
  lightboxWidth: 1024,
  showLightboxThumbnails: false,
}

export default Gallery
