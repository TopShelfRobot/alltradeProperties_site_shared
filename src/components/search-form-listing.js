import React from 'react'

import SliderInput from './slider-input'
import bedsUrl from '../images/icons/ico-beds.png'
import bathsUrl from '../images/icons/ico-baths.png'
import { BlackButton } from '../components/buttons'
import TitledPanel from './titled-panel'

import './search-form-listing.scss'

export default class SearchFormListing extends React.Component {
  static defaultProps = {
    showOffice: true,
  }

  constructor(props) {
    super(props)

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBedsChange = this.handleBedsChange.bind(this)
    this.handleBathsChange = this.handleBathsChange.bind(this)
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.onSubmit()
  }

  handleChange = evt => {
    const { query } = this.props
    const target = evt.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (name === 'minrent') {
      return this.props.onChange('rent', [value, query.rent[1]])
    } else if (name === 'maxrent') {
      return this.props.onChange('rent', [query.rent[0], value])
    } else {
      return this.props.onChange(name, value)
    }
  }

  handleBedsChange = beds => {
    this.props.onChange('beds', beds)
  }

  handleBathsChange = baths => {
    this.props.onChange('baths', baths)
  }

  render() {
    const { query, types, neighborhoods, officeGroups, showOffice } = this.props

    return (
      <TitledPanel className="search-form-listing" title="Refine your search">
        <form className="four columns" onSubmit={this.handleSubmit}>
          <h5 className="form-title">Search:</h5>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="search"
              placeholder="Search addresses"
              value={query.search}
              onChange={this.handleChange}
            />
          </div>

          <h5 className="form-title">Price Range:</h5>
          <div className="mb-3 row">
            <div className="col-6">
              <input
                type="text"
                name="minrent"
                value={query.rent[0]}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Min Rent"
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                name="maxrent"
                value={query.rent[1]}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Max Rent"
              />
            </div>
          </div>

          <h5 className="form-title">Features:</h5>
          <div className="mb-3 clearfix search-checkboxes">
            <div className="row">
              <div className="col-sm-6">
                <input
                  type="checkbox"
                  name="section8"
                  checked={!!query.section8}
                  onChange={this.handleChange}
                  className=""
                  value=""
                />
                <label htmlFor="section8">3rd Party Voucher</label>
              </div>
              <div className="col-sm-6">
                <input
                  type="checkbox"
                  name="petsAllowed"
                  checked={!!query.petsAllowed}
                  onChange={this.handleChange}
                  className=""
                  value=""
                />
                <label htmlFor="petsAllowed">Pets Allowed</label>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <input
                  type="checkbox"
                  name="laundry"
                  checked={!!query.laundry}
                  onChange={this.handleChange}
                  className=""
                  value=""
                />
                <label htmlFor="laundry">Laundry Options</label>
              </div>
              <div className="col-sm-6">
                <input
                  type="checkbox"
                  name="utilities"
                  checked={!!query.utilities}
                  onChange={this.handleChange}
                  className=""
                  value=""
                />
                <label htmlFor="utilities">Utilities</label>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <input
                  type="checkbox"
                  name="movein"
                  checked={!!query.movein}
                  onChange={this.handleChange}
                  className=""
                  value=""
                />
                <label htmlFor="movein">Move-In Special</label>
              </div>
              <div className="col-sm-6" />
            </div>
          </div>

          {showOffice && (
            <div id="office-filter">
              <h5 className="form-title">Office:</h5>
              <div className="mb-3">
                <select
                  name="officeGroup"
                  value={query.officeGroup}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option value="">Select an office</option>
                  {(officeGroups || []).map(officeGroup => (
                    <option key={`GroupID-${officeGroup.GroupID}`} value={officeGroup.GroupID}>
                      {officeGroup.Name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <h5 className="form-title">Type:</h5>
          <div className="mb-3">
            <select name="type" value={query.type} onChange={this.handleChange} className="form-control">
              <option value="">Select a type</option>
              {(types || []).map(propType => (
                <option key={propType} value={propType}>
                  {propType}
                </option>
              ))}
            </select>
          </div>

          <div id="neighborhood-filter">
            <h5 className="form-title">Neighborhood:</h5>
            <div className="mb-3">
              <select
                className="form-control"
                name="neighborhood"
                onChange={this.handleChange}
                value={query.neighborhood}
              >
                <option value="">Select a neighborhood</option>
                {(neighborhoods || []).map(neighborhood => (
                  <option key={neighborhood} value={neighborhood}>
                    {neighborhood}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <h5 className="form-title">Baths &amp; Beds?</h5>
          <div className="mb-3">
            <SliderInput value={query.beds} unit="beds" onChange={this.handleBedsChange} iconUrl={bedsUrl} />
          </div>
          <div className="mb-3">
            <SliderInput value={query.baths} unit="baths" onChange={this.handleBathsChange} iconUrl={bathsUrl} />
          </div>

          <BlackButton onClick={this.handleSubmit}>Search</BlackButton>
        </form>
      </TitledPanel>
    )
  }
}
