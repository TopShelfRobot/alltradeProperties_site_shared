import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'
import Snippet from '../components/snippet'
import { YellowButton } from '../components/buttons'
import ContactForm from '../components/contact-form'

import rentManagerLogoUrl from '../images/rent-manager-logo.jpg'
import videoPosterUrl from '../images/CustomOWA-poster.jpg'
import videoUrl from '../images/CustomOWA.mp4'
import locationMapUrl from '../images/loc_map.png'

import './company.scss'

export default class CompanyPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Property Owners" secondaryPageTitle={false}>
        <Container className="owners-page">
          <Row className="mt-3">
            <h4 className="col-sm-6">Online Access to Your Data</h4>
            <h4 className="col-sm-6"> Customized Service Solutions </h4>
          </Row>

          <Row className="align-items-stretch mb-3">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-media raised">
                  <div className="embed-responsive embed-responsive-16by9">
                    <video controls poster={videoPosterUrl} className="embed-responsive-item">
                      <source src={videoUrl} type="video/mp4" />
                    </video>
                  </div>
                </div>

                <div className="card-content">
                  <Snippet group="owners" snippet="online_access" />

                  <Row className="my-3 justify-content-center">
                    <YellowButton href="https://alltrade.owa.rentmanager.com" target="_blank">
                      Go to OWA
                    </YellowButton>
                  </Row>

                  <a href="http://rentmanager.com">
                    <img src={rentManagerLogoUrl} className="my-3" alt="Rent Manager Logo" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6" style={{ display: 'flex' }}>
              <div className="card">
                <div className="card-media raised" style={{ backgroundColor: '#2eb2ff' }}>
                  <div className="video-ratio">
                    <div className="video-ratio-content">
                      <img id="loc-map" src={locationMapUrl} alt="Alltrade Locations" />
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <Snippet group="owners" snippet="customized_service" />
                </div>
              </div>
            </div>
          </Row>

          <Row className="my-3">
            <div className="col-12">
              <div className="card p-2">
                <Snippet group="owners" snippet="contact_intro" />
              </div>
            </div>
          </Row>

          <ContactForm currentAddress={false} numberOfUnits={true} />
        </Container>
      </Layout>
    )
  }
}
