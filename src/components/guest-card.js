import React from 'react'
import cn from 'classnames'

import TitledPanel from './titled-panel'
import { EmailIcon } from './icons'
import $ from 'jquery'

import './contact-form.scss'
import './contact-form-guestcard.scss'

class GuestCard extends React.Component {
  componentDidMount() {
    const { UnitID, PropertyID } = this.props

    window.gbInitFunction = function() {
      const rmGuestCardOptions = {
        DBID: 'alltrade',
        Location: 'Live Company',
        TemplateName: 'Prospect Guest Card Website',
      }
      if (UnitID) rmGuestCardOptions.UnitID = UnitID
      if (PropertyID) rmGuestCardOptions.DefaultProperty = PropertyID

      $(document).ready(function() {
        window.$('.rmGuestCardContainer').GuestCardForm('initialize', rmGuestCardOptions)
      })
    }

    const script = document.createElement('script')
    script.innerHTML = `window.gbInitFunction();`
    document.body.appendChild(script)
  }

  render() {
    const { title = 'Contact Form', titleIcon = EmailIcon, className: classNameProp } = this.props

    return (
      <TitledPanel className={cn('contact-form', classNameProp)} title={title} titleIcon={titleIcon}>
        <div className="rmGuestCardContainer" />
      </TitledPanel>
    )
  }
}

export default GuestCard
