import React from 'react'

import Container from '../container'
import Row from '../row'
import './footer-bottom.scss'

const currentYear = new Date().getFullYear()

const FooterBottom = props => (
  <div className="footer-bottom">
    <Container>
      <Row>
        <nav className="col-sm-4">
          <ul className="menu">
            {(props.menu || []).map((item, idx) => (
              <li key={`footer-nav-${idx}`}>
                <a href={item.url}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-sm-8 copyright">
          <ul className="social">
            <li>
              <a id="facebook" href="https://www.facebook.com/alltradeproperties" title="Alltrade on Facebook">
                f
              </a>
            </li>
            <li>
              <a id="twitter" href="http://bit.ly/2siIJFR" title="Alltrade on Twitter">
                t
              </a>
            </li>
            <li>
              <a id="youtube" href="http://bit.ly/2s3GXY7" title="Alltrade on YouTube">
                y
              </a>
            </li>
            <li>
              <a id="linkedin" href="http://bit.ly/2qnrtO3" title="Alltrade on LinkedIn">
                l
              </a>
            </li>
          </ul>
          <p className="remove-bottom">
            <a href="/">©Alltrade Property Management, LLC, {currentYear}</a>
          </p>
          <a href="/">Privacy Policy</a>
        </div>
      </Row>
    </Container>
  </div>
)

export default FooterBottom
