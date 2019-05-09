import React from 'react'
import { withPrefix } from 'gatsby'

import Row from './row'
import { DownloadIcon } from './icons'

const tenantResources = [
  {
    title: 'Alltrade Property Management Rental Application',
    file: 'tenantResources/Alltrade Property Management Rental Application.pdf',
    description:
      'You can easily apply online, but if you would prefer to fill it out on paper you can print our application here! Please note this is our standard application.',
  },

  {
    title: 'Alltrade Property Management Tax Credit Rental Application',
    file: 'tenantResources/Alltrade Property Management Rental Application - Tax Credit Properties.pdf',
    description:
      'You can easily apply online, but if you would prefer to fill it out on paper you can print our application here! Please note this is out tax credit (LIHTC) application.',
  },

  {
    title: 'Resident Selection Guidelines (Kentucky/Indiana)',
    file: 'tenantResources/Resident Selection Guidelines.pdf',
    description:
      'Want to learn how to qualify to rent from Alltrade? Read this document! If you are planning to submit a paper application, make sure you print and sign this document and submit with your application!',
  },

  {
    title: 'Resident Selection Guidelines (North Carolina)',
    file: 'tenantResources/Resident Selection Guidelines - North Carolina.pdf',
    description:
      'Want to learn how to qualify to rent from Alltrade? Read this document! If you are planning to submit a paper application, make sure you print and sign this document and submit with your application!  ',
  },

  {
    title: 'Reasonable Accommodation/Modification Request Form',
    file: 'tenantResources/Reasonable Accommodation or Modification Request Form.pdf',
    description:
      'If you or a household member has a disability and is requesting a reasonable accommodation or modification to have equal use and access to your unit, print and complete this form and return it to your Property Manager.',
  },

  {
    title: 'Reasonable Modification/Accommodation Request: Verification of Status as a person with a Disability',
    file: 'tenantResources/Verification of Status of a Person with a Disability Form.pdf',
    description:
      'This form must be completed by a licensed professional (see specific list on actual form) or agency qualified to assist with persons with disabilities.  A copy of the Reasonable Accommodation or Modification Request form should be provided to the individual completing this form.',
  },

  {
    title: 'Resident Grievance Procedure',
    file: 'tenantResources/Grievance Procedure.pdf',
    description:
      "It is certainly Alltrade's goal to provide quality customer service and equitable service to all of our customers. However, if you would like to file a formal grievance, please click the link to learn how you can file do so.",
  },
]

const TenantResourceRow = ({ resource, style = {}, ...props }) => {
  return (
    <div style={{ ...styles.resourceRow, ...style }} className="border-bottom">
      <Row>
        <div className="col-md-11">
          <Row>
            <div className="col-md-12">
              <h5 style={{ fontWeight: 'bold' }}>{resource.title}</h5>
            </div>
            <div className="col-md-12">{resource.description}</div>
          </Row>
        </div>
        <div className="col-md-1" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <h4>
            <a href={withPrefix(resource.file)}>
              <DownloadIcon />
            </a>
          </h4>
        </div>
      </Row>
    </div>
  )
}

const TenantResourceTable = props => {
  return (
    <div style={styles.root}>
      <div style={styles.resources} className="card">
        {(tenantResources || []).map((resource, idx) => (
          <TenantResourceRow
            key={resource.title}
            style={{ backgroundColor: idx % 2 === 1 ? '#eee' : 'transparent' }}
            resource={resource}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  root: {},
  resources: {},
  resourceRow: {
    padding: 10,
  },
}

export default TenantResourceTable
