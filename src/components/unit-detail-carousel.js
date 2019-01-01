import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './unit-detail-carousel.scss'

const UnitCarousel = ({ images, alt, ...props }) => (
  <div className="unit-detail-carousel">
    <Carousel showArrows={true} {...props}>
      {(images || []).map((img, idx) => (
        <div key={`carousel-img-${idx}`}>
          <img src={img} alt={alt} />
        </div>
      ))}
    </Carousel>
  </div>
)

export default UnitCarousel
