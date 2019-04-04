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
            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
              <div className="col-sm-4 logo-box align-self-center">
                <Img className="logo" fluid={logoImageData} />
              </div>

              <div className="col-sm-4">
                <Row>
                  <div className="col-sm-4">
                    <img className="eho" src={ehoLogo} alt="Equal Housing Opportunity Logo" />
                  </div>
                  <div className="col-sm-8">
                    <MainAddress />
                  </div>
                </Row>
              </div>
            </Row>
          </Container>
        </div>
      )
    }}
  />
)

export default FooterTop
