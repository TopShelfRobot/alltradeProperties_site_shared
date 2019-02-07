import React from 'react'

import Row from './row'
import './eviction-resources-table.scss'

const EvictionResourcesTable = ({ resources }) => (
  <div className="eviction-resources-table">
    {resources.map(resource => (
      <Row className="border-bottom resource-row">
        <div className="col-md-4">
          <div className="name">{resource.name}</div>
          {resource.url && (
            <div className="website">
              <a href={resource.url}>{resource.url}</a>
            </div>
          )}
        </div>

        <div className="col-md-2 phone">{resource.phone}</div>

        <div className="col-md-6">{resource.description}</div>
      </Row>
    ))}
  </div>
)

export default EvictionResourcesTable
