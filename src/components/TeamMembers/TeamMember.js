import React from 'react'

import './style.scss'

const TeamMember = ({ teamMember, ...props }) => (
  <div className="team-member card">
    <div className="card-media raised">
      <div className="image" style={{ backgroundImage: `url(${teamMember.imgUrl})` }} />
      {/* <img src={teamMember.imgUrl} alt={teamMember.name} /> */}
    </div>
    <div className="card-content">
      <div className="header">{teamMember.name}</div>
      <div className="meta">{teamMember.role}</div>
    </div>
  </div>
)

export default TeamMember
