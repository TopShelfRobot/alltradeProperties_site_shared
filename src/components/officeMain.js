import React from 'react'

import './officeMain.scss'

const OfficeMain = ({ office, ...props }) => (
  <div className="row office-main location">
    <h5 className="title col-12" onClick={props.onClick}>
      {office.name}
    </h5>

    <div className="col-xs-12 col-sm-6">
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

    <div className="col-xs-12 col-sm-6">
      <ul className="office-hours">
        {(office.hours || []).map((open, idx) => (
          <li key={`omh-${idx}`}>
            {open.days} <strong>{open.hours}</strong>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default OfficeMain
