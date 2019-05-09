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
  faEye as Eye,
  faFilePdf as Pdf,
  faFileDownload as Download,
} from '@fortawesome/free-solid-svg-icons'

import {
  faTwitterSquare as Twitter,
  faFacebookSquare as Facebook,
  faYoutubeSquare as Youtube,
  faInstagram as Instagram,
  faLinkedin as LinkedIn,
} from '@fortawesome/free-brands-svg-icons'

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

export const TwitterIcon = props => <FontAwesomeIcon icon={Twitter} style={{ height: '1em' }} {...props} />
export const FacebookIcon = props => <FontAwesomeIcon icon={Facebook} style={{ height: '1em' }} {...props} />
export const YoutubeIcon = props => <FontAwesomeIcon icon={Youtube} style={{ height: '1em' }} {...props} />
export const InstagramIcon = props => <FontAwesomeIcon icon={Instagram} style={{ height: '1em' }} {...props} />
export const LinkedInIcon = props => <FontAwesomeIcon icon={LinkedIn} style={{ height: '1em' }} {...props} />
export const PdfIcon = props => <FontAwesomeIcon icon={Pdf} style={{ height: '1em' }} {...props} />
export const DownloadIcon = props => <FontAwesomeIcon icon={Download} style={{ height: '1em' }} {...props} />
