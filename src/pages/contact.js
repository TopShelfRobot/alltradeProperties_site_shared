import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'
import ContactForm from '../components/contact-form'
import GoogleMapEmbedded from '../components/googleMapEmbedded'
import MainAddress from '../components/main-address'

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="Contact Us">
        <Container>
          <Row className="my-3">
            <div className="col-sm-8">
              <ContactForm title="What's on our mind?" />
            </div>

            <aside className="col-sm-4">
              <GoogleMapEmbedded />
              <div className="my-3">
                <h5>Alltrade means all trades</h5>
                <p>
                  Alltrade Property Management, based in Louisville, KY, was founded on April 1, 2005. The company now
                  manages single-family homes, multi-family communities, and commercial spaces across four states,
                  including Eastern and Central Kentucky, Southern Indiana, Peoria, Illinois, and Durham, North
                  Carolina.
                </p>
              </div>

              <div className="my-5">
                <h5>Main (Highlands)</h5>
                <MainAddress />
              </div>
            </aside>
          </Row>
        </Container>
      </Layout>
    )
  }
}
