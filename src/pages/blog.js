import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'
import MainAddress from '../components/main-address'
import BlogArticle from '../components/blog-article'

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const articles = data.allArticle.edges.map(e => e.node)

    return (
      <Layout pageTitle="Blog">
        <Container>
          <Row className="my-3">
            <div className="col-sm-8">
              {articles.map(article => (
                <BlogArticle article={article} />
              ))}
            </div>

            <aside className="col-sm-4">
              <div className="my-5">
                <h5>Main (Highlands)</h5>
                <MainAddress />
              </div>
            </aside>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allArticle {
      edges {
        node {
          id
          title
          slug
          content
          status
          authorId
          publishedAt
          createdAt
          updatedAt
          author {
            name
            id
          }
        }
      }
    }
  }
`
