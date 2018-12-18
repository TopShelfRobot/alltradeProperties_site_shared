import React from 'react'
import ClassedComponent from '../tools/classed-component'
// import HeaderImage from './header-image'
import NavMenu from './nav-menu'
import logoUrl from '../../images/alltrade-logo-header.png'

import './header-nav.scss'

const Container = ClassedComponent('div', 'container')
const HeaderImage = () => <img src={logoUrl} style={{ height: '70px' }} alt="Alltrade logo" />

const HeaderNav = props => (
  <div className="header-nav">
    <Container>
      <NavMenu menu={props.menu} className="header-nav-menu" brand={() => <HeaderImage />} />
    </Container>
  </div>
)

export default HeaderNav
