import React from 'react'
import Range from 'rc-slider/lib/Range'
import cn from 'classnames'
import 'rc-slider/assets/index.css'

import './slider-input.scss'

const SliderInput = ({ onChange, value, unit, iconUrl, min = 1, max = 6, ...props }) => {
  const [minVal, maxVal] = value
  const label = `${minVal} - ${maxVal} ${unit}`
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
      <Range min={min} max={max} defaultValue={[min, max]} allowCross={false} onChange={onChange} value={value} />
    </div>
  )
}

export default SliderInput
