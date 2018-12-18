require('dotenv').config()
const crypto = require('crypto')
const api = require('./src/lib/api')
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

const getContentDigest = content =>
  crypto
    .createHash(`md5`)
    .update(content)
    .digest(`hex`)

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  let resources, snippets, offices, teamMembers, partners
  try {
    resources = await api.getEvictionResources()
    snippets = await api.getSnippets()
    offices = await api.getOffices()
    teamMembers = await api.getTeamMembers()
    partners = await api.getCommunityPartners()
  } catch (err) {
    console.log(err.message)
    console.log(err.config)
  }

  /**
   * Eviction Resource Nodes
   */
  resources.forEach(resource => {
    const content = JSON.stringify(resource)
    const contentDigest = getContentDigest(content)

    const resourceNode = {
      ...resource,
      parent: null,
      internal: {
        type: `EvictionResource`,
        contentDigest,
        content,
      },
      children: [],
    }

    createNode(resourceNode)
  })

  /**
   * Snippets
   */
  snippets.forEach(group => {
    const content = JSON.stringify(group)
    const contentDigest = getContentDigest(content)

    const groupNode = {
      ...group,
      parent: null,
      children: [],
      internal: {
        type: 'Snippet',
        contentDigest,
        content,
      },
    }

    createNode(groupNode)
  })

  /**
   * Offices
   */
  offices.forEach(office => {
    const content = JSON.stringify(office)
    const contentDigest = getContentDigest(content)

    const officeNode = {
      ...office,
      parent: null,
      children: [],
      internal: {
        type: 'Office',
        contentDigest,
        content,
      },
    }

    createNode(officeNode)
  })

  /**
   * TeamMembers
   */
  teamMembers.forEach(member => {
    const content = JSON.stringify(member)
    const contentDigest = getContentDigest(content)

    const memberNode = {
      ...member,
      parent: null,
      children: [],
      internal: {
        type: 'TeamMember',
        contentDigest,
        content,
      },
    }

    createNode(memberNode)
  })

  /**
   * Community Partners
   */
  partners.forEach(partner => {
    const content = JSON.stringify(partner)
    const contentDigest = getContentDigest(content)

    const partnerNode = {
      ...partner,
      parent: null,
      children: [],
      internal: {
        type: 'CommunityPartner',
        contentDigest,
        content,
      },
    }

    createNode(partnerNode)
  })

  return
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `OfficePagesJson`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allOfficePagesJson {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allOfficePagesJson.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/office-page.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
