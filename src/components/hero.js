import React from 'react'

import './hero.scss'
const Hero = props => <div className="hero" style={{ backgroundImage: `url(${props.image})` }} {...props} />

export default Hero
