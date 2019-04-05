import React from 'react'

import Row from './row'
import './eviction-resources-table.scss'

const byOrderProp = (a, b) => b - a

class EvictionResourcesTable extends React.Component {
  state = { locale: 'All' }

  render() {
    const { resources } = this.props
    const { locale: localeFilter } = this.state
    const locales = resources
      .map(r => r.locale)
      .filter(Boolean)
      .filter((r, idx, coll) => idx === coll.indexOf(r))

    const filteredResources = resources.filter(r => localeFilter === 'All' || r.locale === localeFilter)

    return (
      <div className="eviction-resources-table">
        <strong>Filter: </strong>
        {['All', ...locales].map(locale => (
          <a
            key={locale}
            className={`resource-filter ${locale === localeFilter ? 'active' : ''}`}
            onClick={() => this.setState({ locale })}
          >
            {locale}
          </a>
        ))}

        <div className="eviction-resource-items card">
          {filteredResources.sort(byOrderProp).map((resource, idx) => (
            <Row key={`resource-${idx}`} className="border-bottom resource-row">
              <div className="col-md-4">
                <a href={resource.url}>
                  <div className="name">{resource.name}</div>
                </a>
              </div>

              <div className="col-md-2 phone">{resource.phone}</div>

              <div className="col-md-6">{resource.description}</div>
            </Row>
          ))}
        </div>
      </div>
    )
  }
}
export default EvictionResourcesTable
