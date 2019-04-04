import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faExclamationTriangle as Warning,
  faPhone as Phone,
  faEnvelope as Envelope,
  faBars as Bars,
  faUser as User,
  faUsers as Users,
  faHome as House,
  faCalendarAlt as Calendar,
  faWrench as Wrench,
} from '@fortawesome/free-solid-svg-icons'

const style = {
  margin: '0 5px',
  height: '1em',
}

const ICONS = {
  'apply-now': '',
  'pay-online': '',
  'submit-service': '',
}

const ActionButton = props => {
  return (
    <div style={styles.root}>
      <div>
        <div className="ab-icon-holder" style={styles.iconHolder}>
          <div className="rest-icon-box" style={styles.restIconBox}>
            <FontAwesomeIcon icon={Wrench} />
          </div>
          <div className="active-icon-box" style={styles.activeIconBox}>
            <FontAwesomeIcon icon={Wrench} />
          </div>
        </div>
      </div>
      ActionButton
    </div>
  )
}

const buttonSize = 50
const styles = {
  root: {
    display: 'flex',
    height: buttonSize,
  },
  iconHolder: {
    display: 'flex',
    flex: 0,
    height: buttonSize,
    width: buttonSize,
    borderRadius: '50%',
    backgroundColor: '#e3e3e3',
  },
  restIconBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: buttonSize,
    height: buttonSize,
  },
}

export default ActionButton
