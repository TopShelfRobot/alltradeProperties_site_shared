import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Row from '../row'
import CommunityPartner from './CommunityPartner'
import './style.scss'

const partnerQuery = graphql`
  query {
    allCommunityPartner {
      edges {
        node {
          id
          name
          location
          url
          imgUrl
          order
        }
      }
    }
  }
`

const CommunityPartners = props => (
  <StaticQuery
    query={partnerQuery}
    render={data => {
      const partners = data.allCommunityPartner.edges.map(e => e.node)

      return (
        <Row className="community-partners">
          {(partners || []).map((partner, idx) => (
            <div className="col-sm-3" key={partner.id}>
              <CommunityPartner partner={partner} />
            </div>
          ))}
        </Row>
      )
    }}
  />
)

export default CommunityPartners
