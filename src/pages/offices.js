import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Row from '../components/row'
import BigDivider from '../components/big-divider'
import GoogleMap from '../components/googleMap'
import OfficeMain from '../components/officeMain'
import OfficeBranch from '../components/officeBranch'

const branchOfficeQuery = graphql`
  query {
    allOffice {
      edges {
        node {
          id
          name
          publicTitle
          geography {
            lat
            lng
            zoom
          }
          address
          phone
          managerTitle
          managerName
        }
      }
    }
  }
`

const offices = [
  {
    main: true,
    name: 'Highlands',
    geography: {
      lat: 38.243699,
      lng: -85.734174,
      zoom: 17,
    },
    hours: [
      { days: 'Monday-Thursday', hours: '9a - 7p' },
      { days: 'Friday', hours: '9a - 5p' },
      { days: 'Saturday', hours: '10a - 4p' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    address: ['710 Barret Ave', 'Louisville, KY 40204'],
    phone: '502-562-1985',
    managerTitle: 'Regional Manager',
    managerName: 'Tonya Hayes',
  },
  {
    main: true,
    name: 'Old Louisville',
    geography: {
      lat: 38.22684,
      lng: -85.7562389,
      zoom: 17,
    },
    hours: [
      { days: 'Mon, Wed & Fri', hours: '9a - 5p' },
      { days: 'Tuesday & Thursday', hours: '9a - 6p' },
      { days: 'Saturday', hours: '10a - 2p' },
    ],
    address: ['1451 S 1st St #2', 'Louisville, KY 40208'],
    phone: '502-637-7666',
    managerTitle: 'Property Manager',
    managerName: 'Amber Lax-Young',
  },
  {
    main: true,
    name: 'South End',
    geography: {
      lat: 38.148293,
      lng: -85.776355,
      zoom: 17,
    },
    hours: [
      { days: 'Mon, Wed &amp; Fri', hours: '9a - 5p' },
      { days: 'Tuesday &amp; Thursday', hours: '9a - 6p' },
      { days: 'Saturday', hours: '10a - 2p' },
    ],
    address: ['5438 New Cut Rd #204', 'Louisville, KY 40214'],
    phone: '502-337-3710',
    managerTitle: 'Regional Manager',
    manangerName: 'Kim Carte',
  },
]

export default class OfficesPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      containerHeight: 0,
      center: undefined,
      zoom: 17,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)

    const { lat, lng } = offices[0].geography
    this.setState({ center: { lat, lng } })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    const containerHeight = window.innerHeight - this.container.getBoundingClientRect().top
    this.setState({ containerHeight })
  }

  handleOfficeClick = geography => () => {
    const { lat, lng, zoom } = geography
    const center = { lat, lng }
    this.setState({ center, zoom })
  }

  render() {
    const mainOffices = offices.filter(o => o.main)
    const { containerHeight, center, zoom } = this.state

    return (
      <Layout pageTitle="Our Locations">
        <div className="office-page container page-height" ref={element => (this.container = element)}>
          <Row>
            <div className="col-sm-6 list-container" style={{ height: containerHeight, overflowY: 'auto' }}>
              <article className="mt-3">
                <BigDivider>Main Offices</BigDivider>

                {(mainOffices || []).map(office => (
                  <Row key={office.name}>
                    <div className="col-12">
                      <OfficeMain office={office} onClick={this.handleOfficeClick(office.geography)} />
                    </div>
                  </Row>
                ))}

                <BigDivider>Other Branch Offices</BigDivider>
                <StaticQuery
                  query={branchOfficeQuery}
                  render={data => {
                    const branchOffices = data.allOffice.edges.map(edge => edge.node)

                    return (
                      <div className="row flex-row">
                        {(branchOffices || []).map(office => (
                          <div key={office.id} className="col-6">
                            <OfficeBranch office={office} onClick={this.handleOfficeClick(office.geography)} />
                          </div>
                        ))}
                      </div>
                    )
                  }}
                />
              </article>
            </div>

            <div className="col-sm-6 map-container hidden-xs" style={{ height: containerHeight }}>
              <GoogleMap center={center} zoom={zoom} mapHeight={containerHeight} />
            </div>
          </Row>
        </div>
      </Layout>
    )
  }
}
