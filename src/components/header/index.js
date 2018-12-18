import React from 'react'

import HeaderTop from './header-top'
import HeaderNav from './header-nav'
import HeaderTitle from './header-title'

const Header = props => (
  <header>
    <HeaderTop {...props} />
    <HeaderNav {...props} />
    {props.pageTitle && <HeaderTitle title={props.pageTitle} secondary={props.secondaryPageTitle} />}
  </header>
)

export default Header
