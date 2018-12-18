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
export const WarningIcon = props => <FontAwesomeIcon icon={Warning} style={style} {...props} />
export const PhoneIcon = props => <FontAwesomeIcon icon={Phone} style={style} {...props} />
export const EmailIcon = props => <FontAwesomeIcon icon={Envelope} style={style} {...props} />
export const MenuIcon = props => <FontAwesomeIcon icon={Bars} style={style} {...props} />
export const UserIcon = props => <FontAwesomeIcon icon={User} style={style} {...props} />
export const UsersIcon = props => <FontAwesomeIcon icon={Users} style={style} {...props} />
export const HouseIcon = props => <FontAwesomeIcon icon={House} style={style} {...props} />
export const CalendarIcon = props => <FontAwesomeIcon icon={Calendar} style={style} {...props} />
export const WrenchIcon = props => <FontAwesomeIcon icon={Wrench} style={style} {...props} />
