import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'
import SectionTitle from '../components/section-title'
import TeamMembers from '../components/TeamMembers'
import CommunityPartners from '../components/CommunityPartners'
import Snippet from '../components/snippet'

import './company.scss'

export default class CompanyPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container className="company-page">
          <SectionTitle>Our Team</SectionTitle>
          <TeamMembers />
          <SectionTitle>Community Engagement</SectionTitle>

          <div className="card" style={{ padding: '1em' }}>
            <Snippet group="company" snippet="community_engagement" />
          </div>
          <CommunityPartners />

          <Row className="my-3 community">
            <div className="col-md-6">
              <Snippet group="company" snippet="community_left" />
            </div>
            <div className="col-md-6">
              <Snippet group="company" snippet="community_right" />
            </div>
          </Row>

          <SectionTitle>A few more fun happenings</SectionTitle>
          <Row className="my-3 community">
            <div className="col-md-6">
              <Snippet group="company" snippet="happening_left" />
            </div>
            <div className="col-md-6">
              <Snippet group="company" snippet="happening_right" />
            </div>
          </Row>
        </Container>
      </Layout>
    )
  }
}
