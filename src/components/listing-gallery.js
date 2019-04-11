import React from 'react'

import Pager from './pager'
import UnitListing from './unit-listing'
import Row from './row'
import './listing-gallery.scss'

const BLANK_UNITS = [{}, {}, {}, {}, {}, {}, {}, {}, {}]

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
    const { units: allUnits, isLoading } = this.props
    const offset = (page - 1) * pageSize
    const units = allUnits.slice(offset, offset + pageSize)
    const totalPages = Math.ceil(allUnits.length / pageSize)

    const unitsDisplay = isLoading ? BLANK_UNITS : units

    return (
      <div className="listing-gallery">
        <div className="page-number">
          Page {page} of {totalPages} ({allUnits.length} units)
        </div>
        <Row>
          {unitsDisplay.map((unit, idx) => (
            <div key={`listing-${idx}`} className="col-lg-4 mb-3">
              <UnitListing unit={unit} isLoading={isLoading} />
            </div>
          ))}
          {!unitsDisplay.length && !isLoading && <h4>No units match your criteria.</h4>}
        </Row>
        <Pager current={page} total={totalPages} onGoTo={this.handleGoToPage} />
      </div>
    )
  }
}
