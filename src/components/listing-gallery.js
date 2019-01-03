import React from 'react'

import Pager from './pager'
import UnitListing from './unit-listing'
import Row from './row'
import './listing-gallery.scss'

export default class ListingGallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      pageSize: 9,
    }
  }

  handleGoToPage = newPage => () => {
    const { units } = this.props
    const { pageSize } = this.state
    if (newPage < 1) return
    if (newPage > Math.ceil(units.length / pageSize)) return
    this.setState({ page: newPage })
  }

  render() {
    const { page, pageSize } = this.state
    const { units: allUnits } = this.props
    const offset = (page - 1) * pageSize
    const units = allUnits.slice(offset, offset + pageSize)
    const totalPages = Math.ceil(allUnits.length / pageSize)

    return (
      <div className="listing-gallery">
        <div className="page-number">
          Page {page} of {totalPages} ({allUnits.length} units)
        </div>
        <Row>
          {units.map(unit => (
            <div key={`listing-${unit.UnitID}`} className="col-4 mb-3">
              <UnitListing unit={unit} />
            </div>
          ))}
          {!units.length && <h4>No units match your criteria.</h4>}
        </Row>
        <Pager current={page} total={totalPages} onGoTo={this.handleGoToPage} />
      </div>
    )
  }
}
