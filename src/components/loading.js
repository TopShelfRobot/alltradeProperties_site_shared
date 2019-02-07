import React from 'react'
import ReactLoading from 'react-loading'

import './loading.scss'

const Loading = props => (
  <div className="loading">
    <ReactLoading type="spin" />
  </div>
)
export default Loading
