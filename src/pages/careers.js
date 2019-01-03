import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'

export default class CareersPage extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')

    script.src = '//newton.newtonsoftware.com/career/iframe.action?clientId=8a7883d0670aec4a016752377b2429d7'
    script.id = 'gnewtonjs'
    script.async = true

    document.getElementById('newton-container').appendChild(script)
  }

  render() {
    return (
      <Layout pageTitle="Careers">
        <Container id="newton-container" />
      </Layout>
    )
  }
}
