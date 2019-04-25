import React from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import FeaturedUnitGallery from '../components/featured-unit-gallery'
import * as api from '../lib/api'
import Container from '../components/container'
import { CTAButton } from '../components/buttons'
import SearchFormMain from '../components/search-form-main'
import Service from '../components/service'
import Hero from '../components/hero'
import Row from '../components/row'

import { queryToQuerystring } from '../lib/query'
import heroImage from '../images/main_bg.jpg'
import Snippet from '../components/snippet'

const applyNowUrl = process.env.GATSBY_APPLY_NOW_URL
const payOnlineUrl = process.env.GATSBY_PAY_ONLINE_URL

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      featuredUnits: [],
      types: [],
      neighborhoods: [],
    }

    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this)
  }
  async componentDidMount() {
    const [{ units: featuredUnits }, { types }, { neighborhoods }] = await Promise.all([
      api.getFeaturedUnits(),
      api.getTypes(),
      api.getNeighborhoods(),
    ])
    this.setState({ featuredUnits, types, neighborhoods })
  }

  handleSearchFormSubmit = form => {
    const qs = queryToQuerystring(form)
    navigate(`/listing?${qs}`)
  }

  render() {
    const { featuredUnits, types, neighborhoods } = this.state
    return (
      <Layout>
        <Hero image={heroImage}>
          <Container>
            <SearchFormMain onSubmit={this.handleSearchFormSubmit} types={types} neighborhoods={neighborhoods} />
          </Container>
        </Hero>
        <Container>
          <Row className="my-5">
            <div className="col-md-4 mb-3">
              <Service href={applyNowUrl} title="Apply Now" icon="apply" border />
            </div>
            <div className="col-md-4 mb-3">
              <Service href={payOnlineUrl} title="Pay Online" icon="credit" border />
            </div>
            <div className="col-md-4 mb-3">
              <Service href="/residents" title="Report Service Issue" icon="wrench" border />
            </div>
          </Row>

          <Row>
            <div className="col-12">
              <h3>Featured Properties</h3>
            </div>
          </Row>
          <FeaturedUnitGallery units={featuredUnits || []} />

          <div className="row my-5">
            <h3 className="col-12 text-xs-center my-5">Our Services</h3>
            <div className="col-sm-4 mb-3">
              <Service
                href="/listing"
                title="Leasing"
                image="place"
                content={<Snippet group="services" snippet="leasing_service" />}
              />
            </div>
            <div className="col-sm-4 mb-3">
              <Service
                href="/listing"
                title="Client Services"
                image="results"
                content={<Snippet group="services" snippet="client_service" />}
              />
            </div>
            <div className="col-sm-4 mb-3">
              <Service
                href="/listing"
                title="Construction &amp; Maintenance"
                image="rocket"
                content={<Snippet group="services" snippet="maintenance_service" />}
              />
            </div>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
