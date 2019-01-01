import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Container from '../container'
import MainAddress from '../main-address'
import Row from '../row'
import ehoLogo from '../../images/eho_logo.png'

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
            <Row>
              <div className="col-sm-4 logo-box">
                <Img className="logo" fluid={logoImageData} />

                <Row>
                  <div className="col-sm-4">
                    <img className="eho" src={ehoLogo} alt="Equal Housing Opportunity Logo" />
                  </div>
                  <div className="col-sm-8">
                    <MainAddress />
                  </div>
                </Row>
              </div>

              <div className="col-sm-4 twitter-wrapper">
                <h5>Follow Alltrade on Twitter</h5>

                <div className="twitter-container">
                  <a className="twitter-timeline" href="https://twitter.com/alltradeky">
                    Tweets by @alltradeky
                  </a>
                  <script async src="//platform.twitter.com/widgets.js" />
                </div>
              </div>

              <div className="col-sm-4 facebook-wrapper">
                <h5>Follow Alltrade on Facebook</h5>
                <iframe
                  title="Alltrade Facebook"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Falltradeproperties&amp;tabs=timeline&amp;height=250&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=false&amp;appId"
                  width="100%"
                  height="250"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                />
              </div>
              {/* <div className="text-widget col-sm-4 logo-box">
              <div className="logos">
                <div>
                  <img src="/images/logo-header.png" alt="" />
                </div>
    
                <div className="row">
                  <div className="col-sm-4">
                    <img className="eho-logo" src="/images/eho_logo.png" alt="" />
                  </div>
    
                  <div className="col-sm-8">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 twitter-wrapper">
              <h5>Follow Alltrade on Twitter</h5>
    
              <div className="twitter-container">
                <a className="twitter-timeline" href="https://twitter.com/alltradeky">
                  Tweets by @alltradeky
                </a>
                <script async src="//platform.twitter.com/widgets.js" />
              </div>
            </div>
    
            <div className="col-sm-4 small-form facebook-wrapper">
              <h5>Follow Alltrade on Facebook</h5>
              <iframe
                title="Alltrade Facebook Feed"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Falltradeproperties&tabs=timeline&height=250&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                width="100%"
                height="250"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
              />
            </div> */}
            </Row>
          </Container>
        </div>
      )
    }}
  />
)

export default FooterTop
