import React from 'react'

import Row from './row'
import SliderInput from './slider-input'
import bedsUrl from '../images/icons/ico-beds.png'
import bathsUrl from '../images/icons/ico-baths.png'
import { getDefaultForm } from '../lib/query'

import './search-form-main.scss'

class SearchFormMain extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form: getDefaultForm(),
    }

    this.resetForm = this.resetForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBedsChange = this.handleBedsChange.bind(this)
    this.handleBathsChange = this.handleBathsChange.bind(this)
  }

  componentDidMount() {
    this.resetForm()
  }

  resetForm = () => {
    this.setState({ form: getDefaultForm() })
  }

  handleSubmit = evt => {
    evt.preventDefault()

    this.props.onSubmit(this.state.form)
    this.resetForm()
  }

  handleChange = evt => {
    const target = evt.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    const form = { ...this.state.form }
    if (name === 'minrent') {
      form.rent = [value, form.rent[1]]
    } else if (name === 'maxrent') {
      form.rent = [form.rent[0], value]
    } else {
      form[name] = value
    }
    this.setState({ form })
  }

  handleBedsChange = beds => {
    const form = { ...this.state.form, beds }
    this.setState({ form })
  }

  handleBathsChange = baths => {
    const form = { ...this.state.form, baths }
    this.setState({ form })
  }

  render() {
    const { types, neighborhoods } = this.props
    const { form } = this.state

    return (
      <form className="search-form-main" onSubmit={this.handleSubmit}>
        <Row>
          <div className="col-6">
            <h4 className="search-title">Search Property</h4>
          </div>
          <div className="col-6">
            <input type="submit" className="search-submit float-right" value="Search" />
          </div>
        </Row>

        <Row>
          <div className="col-4">
            <Row>
              <div className="col-6 pad">
                <select className="form-control" name="type" onChange={this.handleChange}>
                  <option>Select a type</option>
                  {(types || []).map(propType => (
                    <option key={propType} value={propType}>
                      {propType}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6 pad">
                <select
                  className="form-control"
                  name="neighborhood"
                  title="Neighborhood"
                  id="neighborhood-select"
                  onChange={this.handleChange}
                >
                  <option value="">Select a neighborhood</option>
                  {(neighborhoods || []).map(neighborhood => (
                    <option key={neighborhood} value={neighborhood}>
                      {neighborhood}
                    </option>
                  ))}
                </select>
              </div>
            </Row>
            <Row>
              <div className="col-6 pad">
                <input
                  type="text"
                  className="form-control"
                  id="min-rent"
                  name="minrent"
                  value={form.rent[0]}
                  placeholder="$ Min"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-6 pad">
                <input
                  type="text"
                  className="form-control"
                  id="max-rent"
                  name="maxrent"
                  value={form.rent[1]}
                  placeholder="$ Max"
                  onChange={this.handleChange}
                />
              </div>
            </Row>
          </div>
          <div className="col-4">
            <Row>
              <div className="col-12 pad">
                <SliderInput value={form.beds} unit="beds" onChange={this.handleBedsChange} iconUrl={bedsUrl} />
              </div>
            </Row>
            <Row>
              <div className="col-12 pad">
                <SliderInput value={form.baths} unit="baths" onChange={this.handleBathsChange} iconUrl={bathsUrl} />
              </div>
            </Row>
          </div>
          <div className="col-4 pad">
            <Row>
              <div className="col-6">
                <label htmlFor="section8">
                  <input type="checkbox" name="section8" checked={form.section8} onChange={this.handleChange} />
                  3rd Party Voucher
                </label>
              </div>
              <div className="col-6">
                <label htmlFor="petsAllowed">
                  <input type="checkbox" name="petsAllowed" checked={form.petsAllowed} onChange={this.handleChange} />
                  Pets Allowed
                </label>
              </div>
            </Row>

            <Row>
              <div className="col-6">
                <label htmlFor="laundry">
                  <input type="checkbox" name="laundry" checked={form.laundry} onChange={this.handleChange} />
                  Laundry Options
                </label>
              </div>
              <div className="col-6">
                <label htmlFor="utilities">
                  <input type="checkbox" name="utilities" checked={form.utilities} onChange={this.handleChange} />
                  Utilities
                </label>
              </div>
            </Row>

            <Row>
              <div className="col-6">
                <label htmlFor="movein">
                  <input type="checkbox" name="movein" checked={form.movein} onChange={this.handleChange} />
                  Move-In Special
                </label>
              </div>
            </Row>
          </div>
        </Row>
      </form>
    )
  }
}

export default SearchFormMain
