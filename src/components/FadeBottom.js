import React from 'react'

const style = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '75px',
  background: 'linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100% )',
}

const FadeBottom = props => <div style={style} {...props} />

export default FadeBottom
