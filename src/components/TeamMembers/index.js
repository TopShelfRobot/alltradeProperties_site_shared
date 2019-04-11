import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Row from '../row'
import TeamMember from './TeamMember'
import './style.scss'

const teamQuery = graphql`
  query {
    allTeamMember {
      edges {
        node {
          id
          name
          role
          imgUrl
          order
          createdAt
          updatedAt
        }
      }
    }
  }
`

const TeamMembers = props => (
  <StaticQuery
    query={teamQuery}
    render={data => {
      const teamMembers = data.allTeamMember.edges.map(edge => edge.node)
      teamMembers.sort((a, b) => a.order - b.order)
      return (
        <Row className="team-members">
          {teamMembers.map(member => (
            <div key={member.id} className="col-sm-3 my-3">
              <TeamMember teamMember={member} />
            </div>
          ))}
        </Row>
      )
    }}
  />
)

export default TeamMembers
