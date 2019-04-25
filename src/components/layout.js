import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ToastContainer } from 'react-toastify'
import ContactForm from './contact-form'

import Header from './header'
import Footer from './footer'
import ApplyCTAButton from './buttons/apply-cta-button'
import Modal, { ModalRoot } from './modal'

import '../styles/main.scss'
import 'react-toastify/dist/ReactToastify.css'

const Layout = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            phone
            email
            menu {
              label
              url
              sub {
                label
                url
              }
            }
          }
        }
      }
    `}
    render={data => {
      const phone = props.phone || data.site.siteMetadata.phone
      const email = props.email || data.site.siteMetadata.email

      return (
        <ModalRoot>
          <Modal name="maintenance-request">
            <ContactForm title="Submit a Maintenance Request" />
          </Modal>

          <Helmet
            title={data.site.siteMetadata.title}
            meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
          >
            <html lang="en" />
          </Helmet>
          <Header
            siteTitle={data.site.siteMetadata.title}
            phone={phone}
            email={email}
            menu={data.site.siteMetadata.menu}
            pageTitle={props.pageTitle}
            secondaryPageTitle={props.secondaryPageTitle !== false ? props.secondaryPageTitle : null}
          />
          <div>{children}</div>
          <ToastContainer />
          <Footer menu={data.site.siteMetadata.menu} />
        </ModalRoot>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
