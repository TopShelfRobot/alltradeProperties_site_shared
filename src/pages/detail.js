import React from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import * as api from '../lib/api'
import Container from '../components/container'
import Row from '../components/row'
import PropertyContact from '../components/property-contact'
import ContactForm from '../components/contact-form'
import { ApplyNowButton } from '../components/buttons'
import UnitDetailTitle from '../components/unit-detail-title'
import UnitDetailAvailable from '../components/unit-detail-available'
import UnitDetail from '../components/unit-detail'

import { getQueryFromLocation, getDefaultForm } from '../lib/query'

class DetailPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      unit: {},
      property: {},
      query: getDefaultForm(),
      units: [],
      types: [],
      neighborhoods: [],
      officeGroups: [],
    }
  }

  async componentDidMount() {
    const query = getQueryFromLocation()

    const { UnitID } = query
    const unit = await api.getUnit(UnitID)
    if (!unit) {
      navigate('/404/')
    }

    const { Property: property } = unit
    this.setState({ unit, property })
  }

  render() {
    const { unit, property } = this.state
    return (
      <Layout pageTitle="Unit Details" secondaryPageTitle={property.primaryPhoneNumber}>
        <Container>
          <Row className="border-bottom mb-3">
            <aside className="col-12 col-sm-4 order-last">
              <UnitDetailAvailable availableWhen={unit.availableWhen} />
            </aside>

            <section className="col-12 col-sm-8 order-first">
              <UnitDetailTitle title={unit.title} address={unit.fullAddress} />
            </section>
          </Row>

          <Row>
            <aside className="col-12 col-sm-4 order-last">
              <PropertyContact property={property} />
              {/** 
                Only mount the contact form after the unit has been retrieved.
                The ContactForm element creates a <script> tag when mounted and
                must have the UnitID and PropertyID at that time.
              */}
              {unit.UnitID && (
                <ContactForm
                  className="my-3"
                  title="Find out more about this rental"
                  messagePlaceholder={`I'd like to know more aobut ${unit.fullAddress}`}
                  toEmail={property.Email}
                  UnitID={unit.UnitID}
                  PropertyID={unit.PropertyID}
                />
              )}
              <ApplyNowButton UnitID={unit.UnitID} />
            </aside>

            <section className="col-12 col-sm-8 order-first mb-3">
              <UnitDetail unit={unit} />
            </section>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default DetailPage
