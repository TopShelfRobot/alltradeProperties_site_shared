import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'
import CalloutBox from '../components/callout-box'
import { UsersIcon, HouseIcon, CalendarIcon, WrenchIcon } from '../components/icons'
import { YellowButton } from '../components/buttons'
import ContactForm from '../components/contact-form'
import SectionTitle from '../components/section-title'
import Snippet from '../components/snippet'
import EvictionResourcesTable from '../components/eviction-resources-table'

const paddedSectionStyle = {
  margin: '30px 0',
}

const evictionResourcesQuery = graphql`
  query {
    allEvictionResource {
      edges {
        node {
          id
          name
          phone
          url
          description
          createdAt
        }
      }
    }
  }
`

class ResidentsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout pageTitle="Community is our Company">
        <Container className="py-3">
          <Row>
            <div className="col-sm-6">
              <p>
                At Alltrade, we are always working to ensure we provide our tenants with quality customer service. As
                such, we are excited to offer our residents the option to pay rent online through a secure web portal!
                Residents have the option to set up recurring ACH payments or process one-time transactions using a
                credit or debit card.
              </p>

              <Row className="justify-content-center">
                <div className="col-sm-6" style={paddedSectionStyle}>
                  <YellowButton
                    className="full-button"
                    href="https://alltrade.twa.rentmanager.com/"
                    role="button"
                    target="_blank"
                  >
                    PAY ONLINE
                  </YellowButton>
                </div>
              </Row>

              <p>
                Please note: You must have an email on file with Alltrade to authenticate your account. If you need to
                update your email address, please contact your property manager or feel free to call our main office at
                502-562-1985 and someone will be happy to assist you.
              </p>

              <p>
                If paying online is not your thing, you can also pay your rent in the office or over the phone using
                your credit card or banking information or ask one of our dedicated team members about CashPay, where
                you can pay your rent at the grocery store and other participating locations!
              </p>

              <Row className="align-items-stretch">
                <div className="col-md-6 mb-3">
                  <CalloutBox
                    icon={UsersIcon}
                    pre="More than"
                    stat={<Snippet group="residents" snippet="staff_count" />}
                    post="staff to assist you"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <CalloutBox
                    icon={HouseIcon}
                    pre="Listings:"
                    stat={<Snippet group="residents" snippet="listing_count" />}
                  />
                </div>
              </Row>

              <Row>
                <div className="col-md-6 mb-3">
                  <CalloutBox
                    icon={CalendarIcon}
                    pre="Available"
                    stat={<Snippet group="residents" snippet="available_days_count" />}
                    post="days a week"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <CalloutBox
                    icon={WrenchIcon}
                    pre="Serving you from"
                    stat={<Snippet group="residents" snippet="office_count" />}
                    post="office locations"
                  />
                </div>
              </Row>
            </div>

            <div className="col-sm-6">
              <p>
                <strong>Have another question or want to submit a non-emergency maintenance issue?</strong> Contact us
                using the form below!
              </p>

              <ContactForm />
            </div>
          </Row>

          <SectionTitle>Eviction Assistance Resources</SectionTitle>
          <p>The resources below may be able to assist you if you are facing eviction.</p>
          <StaticQuery
            query={evictionResourcesQuery}
            render={data => {
              const resources = data.allEvictionResource.edges.map(edge => edge.node)
              return (
                <div className="card">
                  <EvictionResourcesTable resources={resources} />
                </div>
              )
            }}
          />
        </Container>
      </Layout>
    )
  }
}

export default ResidentsPage
