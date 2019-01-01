import React from 'react'

import './property-contact.scss'

const PropertyContact = ({ property, ...props }) => (
  <div className="property-contact lighted form-holder">
    <h5 className="small-title person-icon yellow">Contact info</h5>
    <div className="content">
      <table className="sparse">
        <tbody>
          <tr>
            <th>Manager</th>
            <td className="contact-info">{property.ManagerName}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td className="contact-info">
              <a className="phone" href={`tel:${property.primaryPhoneNumber}`}>
                {property.primaryPhoneNumber}
              </a>
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td className="contact-info">
              <a className="email" href={`mailto:${property.Email}`}>
                {property.Email}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default PropertyContact
