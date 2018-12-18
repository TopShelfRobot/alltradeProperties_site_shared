import React from 'react'

import './style.scss'

const CommunityPartner = ({ partner, ...props }) => (
  <div className="card partner-card community-partner">
    <div className="square">
      <div className="card-media">
        <img className="company-img" src={partner.imgUrl} alt={partner.name} />
      </div>
      <div className="card-overlay">
        <div className="partner-info">
          <div className="partner-name">{partner.name}</div>
          <div className="partner-city">{partner.location}</div>
          <div className="partner-url">
            <a href={partner.url} target="_blank" rel="noopener noreferrer">
              {partner.url}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CommunityPartner
