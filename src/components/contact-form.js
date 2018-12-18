import React from 'react'

import Row from './row'
import TitledPanel from './titled-panel'
import { EmailIcon } from './icons'
import { BlackButton } from './buttons'
import * as api from '../lib/api'

import './contact-form.scss'

const EMPTY_FORM = {
  name: '',
  email: '',
  currentAddress: '',
  phone: '',
  numberOfUnits: '',
  propertyType: null,
  message: '',
}

const Error = props => (props.error ? <span className="input-error">{props.error}</span> : null)

class ContactForm extends React.Component {
  static defaultProps = {
    currentAddress: true,
    numberOfUnits: false,
    propertyType: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      form: EMPTY_FORM,
      formErrors: {},
      error: null,
      success: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validate = () => {
    const { form } = this.state
    const formErrors = {}

    if (!form.name) formErrors.name = 'Please provide a name'
    if (!form.phone) formErrors.phone = 'Please provide a phone number'
    if (!form.message) formErrors.message = 'Was there something you wanted to say?'

    this.setState({ formErrors })
    return !Object.keys(formErrors).length
  }

  handleChange = evt => {
    const { name, value } = evt.target
    const form = { ...this.state.form, [name]: value }
    this.setState({ form })
  }
  handleSubmit = evt => {
    evt.preventDefault()

    if (!this.validate()) return

    api
      .generalContact(this.state.form)
      .then(resp => {
        this.setState({ success: 'Message delivered, thank you!', error: null, form: EMPTY_FORM })
      })
      .catch(err => {
        this.setState({ success: null, error: 'Yikes! There was a problem delivering your message' })
        console.error(err)
      })
  }

  render() {
    const { form, formErrors, error, success } = this.state
    const {
      title = 'Contact Form',
      titleIcon = EmailIcon,
      currentAddress: showCurrentAddress,
      numberOfUnits: showNumberOfUnits,
      propertyType: showPropertyType,
    } = this.props

    return (
      <TitledPanel className="contact-form" title={title} titleIcon={titleIcon}>
        <form action="post" className="remove-bottom" id="mail-form" onSubmit={this.handleSubmit}>
          <input type="hidden" id="mail-toEmail" value="" />

          <Row>
            <div className="col-12 input-group">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={this.handleChange}
                placeholder="Name"
                className="form-control"
                required
              />
              <Error error={formErrors.name} />
            </div>
            <div className="col-12 input-group">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={this.handleChange}
                placeholder="Email"
                className="form-control"
              />
              <Error error={formErrors.email} />
            </div>
            {showCurrentAddress && (
              <div className="col-12 input-group">
                <input
                  type="text"
                  name="currentAddress"
                  value={form.currentAddress}
                  onChange={this.handleChange}
                  placeholder="Current Address"
                  className="form-control"
                />
                <Error error={formErrors.currentAddress} />
              </div>
            )}
            <div className="col-12 input-group">
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={this.handleChange}
                placeholder="Phone Number"
                className="form-control"
                required
              />
              <Error error={formErrors.phone} />
            </div>
            {showNumberOfUnits && (
              <div className="col-12 input-group">
                <input
                  type="text"
                  name="numberOfUnits"
                  value={form.numberOfUnits}
                  onChange={this.handleChange}
                  placeholder="Number of Units"
                  className="form-control"
                  required
                />
                <Error error={formErrors.numberOfUnits} />
              </div>
            )}
            {showPropertyType && (
              <div className="col-12 input-group">
                <select
                  name="propertyType"
                  value={form.propertyType || ''}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option>Multi-family</option>
                  <option>Single family home</option>
                  <option>Mixed portfolio</option>
                  <option>Commercial</option>
                </select>
              </div>
            )}
            <div className="col-12 input-group">
              <textarea
                name="message"
                value={form.message}
                onChange={this.handleChange}
                rows="10"
                className="form-control"
              />
              <Error error={formErrors.message} />
            </div>
            <div className="col-12 input-group">
              {error && <p className="text-danger">{error}</p>}
              {success && <p className="text-success">{success}</p>}
              <BlackButton onClick={this.handleSubmit}>Submit</BlackButton>
            </div>
          </Row>
        </form>
      </TitledPanel>
    )
  }
}

export default ContactForm
