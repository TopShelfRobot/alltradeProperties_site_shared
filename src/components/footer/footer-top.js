import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Container from '../container'
import MainAddress from '../main-address'
import Row from '../row'
import ehoLogo from '../../images/eho_logo.png'

import fbUrl from '../../images/icons/fb.png'
import ytUrl from '../../images/icons/yt.png'
import twUrl from '../../images/icons/tw.png'
import liUrl from '../../images/icons/li.png'
import igUrl from '../../images/icons/ig.png'

import './footer-top.scss'

const FooterTop = props => (
  <StaticQuery
    query={graphql`
      query {
        logoImage: file(relativePath: { eq: "alltrade-logo-header.png" }) {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ehoImage: file(relativePath: { eq: "eho_logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const logoImageData = data.logoImage.childImageSharp.fluid
      return (
        <div className="footer-top">
          <Container>
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
              <div className="col-sm-4 logo-box align-self-center">
                <Img className="logo" fluid={logoImageData} />
              </div>

              <div className="col-sm-4">
                <Row>
                  <div className="col-sm-4">
                    <img className="eho" src={ehoLogo} alt="Equal Housing Opportunity Logo" />
                  </div>
                  <div className="col-sm-8 main-address-box">
                    <MainAddress />
                  </div>
                </Row>
              </div>
              <div className="social-box">
                <a
                  id="facebook"
                  href="https://www.facebook.com/alltradeproperties"
                  title="Alltrade on Facebook"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={fbUrl} className="social-icon" alt="Facebook" />
                </a>
                <a
                  id="twitter"
                  href="https://twitter.com/alltradeky"
                  title="Alltrade on Twitter"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={twUrl} className="social-icon" alt="Facebook" />
                </a>
                <a
                  id="youtube"
                  href="https://www.youtube.com/watch?v=-ZLaEpU7nhw"
                  title="Alltrade on YouTube"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={ytUrl} className="social-icon" alt="Youtube" />
                </a>
                <a
                  id="linkedin"
                  href="https://www.linkedin.com/company/alltrade-property-management/about/"
                  title="Alltrade on LinkedIn"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={liUrl} className="social-icon" alt="Facebook" />
                </a>
                <a
                  id="instagram"
                  href="https://www.instagram.com/alltradeproperties/"
                  title="Alltrade on Instagram"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={igUrl} className="social-icon" alt="Instagram" />
                </a>
              </div>
            </Row>
          </Container>
        </div>
      )
    }}
  />
)

export default FooterTop
