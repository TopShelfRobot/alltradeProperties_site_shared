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
            <div
              className="border-bottom"
              key={`resource-${idx}`}
              style={{ padding: '10px', backgroundColor: idx % 2 === 1 ? '#eee' : 'transparent' }}
            >
              <Row className="resource-row">
                <div className="col-md-6">
                  <a href={resource.url}>
                    <h4 className="name">{resource.name}</h4>
                  </a>
                </div>

                <div className="col-md-6 phone" style={{ textAlign: 'right' }}>
                  <h4>{resource.phone}</h4>
                </div>
              </Row>
              <Row>
                <div className="col-md-12">{resource.description}</div>
              </Row>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default EvictionResourcesTable
