import React from 'react'

import FooterTop from './footer-top'
import FooterBottom from './footer-bottom'

const Footer = props => (
  <footer>
    <FooterTop {...props} />
    <FooterBottom {...props} />
  </footer>
)

export default Footer
