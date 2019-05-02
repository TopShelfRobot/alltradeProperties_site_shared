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

const detailsQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        phone
        email
        description
        keywords
        siteUrl
        logoOg
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
`
class Layout extends React.Component {
  getTitle() {
    const { siteMetadata, title } = this.props
    return title || siteMetadata.title
  }

  getPhone() {
    return this.props.phone || this.props.siteMetadata.phone
  }

  getEmail() {
    return this.props.email || this.props.siteMetadata.email
  }

  getDescription() {
    const { siteMetadata, description } = this.props
    return description || siteMetadata.description
  }
  getKeywords() {
    const { siteMetadata, keywords } = this.props
    return keywords || siteMetadata.keywords
  }

  getUrl() {
    const { slug, siteMetadata } = this.props
    if (slug) {
      return `https://alltradeproperties.com${slug}`
    } else {
      return siteMetadata.siteUrl
    }
  }

  render() {
    const phone = this.getPhone()
    const email = this.getEmail()
    const title = this.getTitle()
    const description = this.getDescription()
    const keywords = this.getKeywords()
    const url = this.getUrl()
    const logoOg = this.props.siteMetadata.logoOg

    return (
      <ModalRoot>
        <Modal name="maintenance-request">
          <ContactForm title="Submit a Maintenance Request" />
        </Modal>

        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { property: 'og:url', content: url },
            { property: 'og:type', content: 'article' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: logoOg },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          siteTitle={title}
          phone={phone}
          email={email}
          menu={this.props.siteMetadata.menu}
          pageTitle={this.props.pageTitle}
          secondaryPageTitle={this.props.secondaryPageTitle !== false ? this.props.secondaryPageTitle : null}
        />
        <div>{this.props.children}</div>
        <ToastContainer />
        <Footer menu={this.props.siteMetadata.menu} />
      </ModalRoot>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

class LayoutWrapper extends React.Component {
  render() {
    return (
      <StaticQuery
        query={detailsQuery}
        render={data => {
          return <Layout {...this.props} siteMetadata={data.site.siteMetadata} />
        }}
      />
    )
  }
}

export default LayoutWrapper
