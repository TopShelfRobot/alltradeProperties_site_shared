import React from 'react'

import { graphql, StaticQuery } from 'gatsby'

const snippetQuery = graphql`
  query {
    allSnippet {
      edges {
        node {
          id
          groupId
          name
          prop
          type
          content
          group {
            name
            prop
            id
          }
        }
      }
    }
  }
`

export const getSnippet = (snippets, group, snippet) => {
  try {
    return snippets.find(s => s.prop === snippet && s.group.prop === group)
  } catch (err) {
    return null
  }
}

const Snippet = ({ group: groupName, snippet: snippetName, ...props }) => (
  <StaticQuery
    query={snippetQuery}
    render={data => {
      const snippets = data.allSnippet.edges.map(edge => edge.node)

      const snippet = getSnippet(snippets, groupName, snippetName)
      if (!snippet) return `Snippet ${groupName}.${snippetName} not found`
      if (snippet.type === 'html') return <div dangerouslySetInnerHTML={{ __html: snippet.content }} />
      return snippet.content
    }}
  />
)

export default Snippet
