import React from 'react'
import cn from 'classnames'

import Row from './row'
import TitledPanel from './titled-panel'
import { EmailIcon } from './icons'
import { BlackButton } from './buttons'
import * as api from '../lib/api'
import $ from 'jquery'

import './contact-form.scss'
import './contact-form-guestcard.scss'

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

  componentDidMount() {
    const { UnitID, PropertyID } = this.props
    console.log({ UnitID, PropertyID })
    const script = document.createElement('script')
    const scriptText = `
    const rmGuestCardOptions = {
      DBID: 'alltrade',
      Location: 'Live Company',
      TemplateName: 'Prospect Guest Card (Website)',
      ${UnitID ? `UnitID: ${UnitID},` : ''}
      ${PropertyID ? `DefaultProperty: ${PropertyID},` : ''}
    };

    $(document).ready(function() {
      $('.rmGuestCardContainer').GuestCardForm('initialize', rmGuestCardOptions);
    })
    `
    script.innerHTML = scriptText
    document.body.appendChild(script)
  }

  render() {
    const { form, formErrors, error, success } = this.state
    const {
      title = 'Contact Form',
      titleIcon = EmailIcon,
      messagePlaceholder = '',
      toEmail = '',
      currentAddress: showCurrentAddress,
      numberOfUnits: showNumberOfUnits,
      propertyType: showPropertyType,
      className: classNameProp,
    } = this.props

    return (
      <TitledPanel className={cn('contact-form', classNameProp)} title={title} titleIcon={titleIcon}>
        <div className="rmGuestCardContainer" />
      </TitledPanel>
    )
  }
}

export default ContactForm
