import React from 'react'
import Range from 'rc-slider/lib/Range'
import cn from 'classnames'
import 'rc-slider/assets/index.css'

import './slider-input.scss'

const SliderInput = ({ onChange, value, unit, iconUrl, ...props }) => {
  const [min, max] = value
  const label = `${min} - ${max} ${unit}`
  const inputStyle = iconUrl ? { background: `white url(${iconUrl}) no-repeat 10px center` } : {}

  return (
    <div className="slider-input">
      <input
        id="beds-display"
        className={cn('form-control', { 'with-icon': !!iconUrl })}
        value={label}
        style={inputStyle}
        readOnly
      />
      <Range min={1} max={5} defaultValue={[1, 5]} allowCross={false} onChange={onChange} value={value} />
    </div>
  )
}

export default SliderInput
