import React from 'react'

import './main-address.scss'

const MainAddress = props => (
  <ul className="main-address">
    <li className="location">710 Barret Ave, Louisville, KY</li>
    <li className="phone">
      <a className="phone" href="tel:(502)562-1985">
        (502)562-1985
      </a>
    </li>
    <li className="email">
      <a className="email" href="mailto:info@alltradeproperties.com">
        info@alltradeproperties.com
      </a>
    </li>
  </ul>
)

export default MainAddress
