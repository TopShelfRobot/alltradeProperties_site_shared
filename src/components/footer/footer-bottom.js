import React from 'react'

import Container from '../container'
import Row from '../row'
import './footer-bottom.scss'
import { TwitterIcon, FacebookIcon, YoutubeIcon, InstagramIcon, LinkedInIcon } from '../icons'

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
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a id="twitter" href="https://twitter.com/alltradeky" title="Alltrade on Twitter">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a id="youtube" href="https://www.youtube.com/watch?v=-ZLaEpU7nhw" title="Alltrade on YouTube">
                <YoutubeIcon />
              </a>
            </li>
            <li>
              <a
                id="linkedin"
                href="https://www.linkedin.com/company/alltrade-property-management/about/"
                title="Alltrade on LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a id="instagram" href="https://www.instagram.com/alltradeproperties/" title="Alltrade on Instagram">
                <InstagramIcon />
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
