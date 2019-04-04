import React from 'react'
import { graphql, navigate, withPrefix } from 'gatsby'

import * as api from '../lib/api'
import { queryToQuerystring, querystringToQuery, queryToBody, getDefaultForm } from '../lib/query'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Container from '../components/container'
import Row from '../components/row'
import { CTAButton } from '../components/buttons'
import FeaturedUnitGallery from '../components/featured-unit-gallery'
import ListingGallery from '../components/listing-gallery'
import SearchFormListing from '../components/search-form-listing'

import defaultHeroImage from '../images/main_bg.jpg'
import './office-page.scss'

export default class OfficeSubPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      featuredUnits: [],
      types: [],
      neighborhoods: [],
      officeGroups: [],
      query: getDefaultForm(),
      units: [],
    }
  }

  async componentDidMount() {
    const query = { ...this.state.query, ...this.getQueryFromLocation() }

    const [{ units: featuredUnits }, { types }, { neighborhoods }, { officeGroups }, { units }] = await Promise.all([
      this.getFeaturedUnits(),
      api.getTypes(),
      api.getNeighborhoods(),
      api.getOfficeGroups(),
      this.getUnits(query),
    ])
    this.setState({ types, neighborhoods, officeGroups, query, units, featuredUnits })
  }

  getUnits = async query => {
    const { page, pageSize } = this.state
    const body = queryToBody({ ...query, page, pageSize, propertyGroup: this.getPropertyGroupId() })
    return api.getUnits(body)
  }

  getFeaturedUnits = () => {
    const qs = `propertyGroup=${this.getPropertyGroupId()}`
    return api.getFeaturedUnits(qs)
  }

  getQueryFromLocation = () => {
    const qs = window.location.search
    return querystringToQuery(qs)
  }

  handleQueryChange = (name, value) => {
    const query = { ...this.state.query, [name]: value }
    this.setState({ query })
  }

  handleSearchFormSubmit = async () => {
    const { query } = this.state
    const qs = queryToQuerystring(query)
    const { units } = await this.getUnits(query)

    navigate(`${this.getSlug()}?${qs}`)
    this.setState({ units })
  }

  getPropertyGroupId = () => this.props.data.officePagesJson.propertyGroupID
  getSlug = () => this.props.data.officePagesJson.fields.slug

  render() {
    const { data } = this.props
    const { featuredUnits, types, neighborhoods, officeGroups, query, units } = this.state
    const officePage = data.officePagesJson
    const heroImage = officePage.staticImage ? withPrefix(officePage.staticImage) : defaultHeroImage

    return (
      <Layout phone={officePage.phone} email={officePage.email}>
        <Hero image={heroImage}>
          <Container className="black-container">
            <h3>{officePage.name}</h3>
          </Container>
        </Hero>

        <Container>
          <Row className="mt-5">
            <div className="col-6">
              <h3>Featured Properties</h3>
            </div>
            <div className="col-6">
              <span className="float-right">
                <CTAButton href="https://alltrade.twa.rentmanager.com/applynow">
                  Start your rental application now
                </CTAButton>
              </span>
            </div>
          </Row>

          <Row>
            <aside className="col-sm-4 order-sm-12">
              <SearchFormListing
                onSubmit={this.handleSearchFormSubmit}
                onChange={this.handleQueryChange}
                query={query}
                types={types}
                neighborhoods={neighborhoods}
                officeGroups={officeGroups}
                showOffice={false}
              />
            </aside>

            <div className="col-sm-8">
              <FeaturedUnitGallery units={featuredUnits || []} />

              <h3 className="my-3">All Available</h3>
              <ListingGallery units={units} />
            </div>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    officePagesJson(fields: { slug: { eq: $slug } }) {
      name
      propertyGroupID
      phone
      email
      staticImage
      fields {
        slug
      }
    }
  }
`
