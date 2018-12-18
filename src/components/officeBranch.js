import React from 'react'

import './officeBranch.scss'
import './officeMain.scss'

const OfficeBranch = ({ office, ...props }) => (
  <div className="office-branch location">
    <h5 className="title" onClick={props.onClick}>
      {office.publicTitle || office.name}
    </h5>
    <ul className="office-address">
      {(office.address || []).map((line, idx) => (
        <li key={`${office.name}-address-${idx}`}>{line}</li>
      ))}
      <li>
        <a className="phone" href={`tel:${office.phone}`}>
          {office.phone}
        </a>
      </li>
      <li className="mt-4">
        {office.managerTitle}: {office.managerName}
      </li>
    </ul>
  </div>
)

export default OfficeBranch
