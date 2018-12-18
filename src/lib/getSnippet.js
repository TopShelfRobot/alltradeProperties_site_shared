const getSnippet = (groups, groupProp, snippetProp) => {
  try {
    return groups.find(g => g.node.prop === groupProp).node.snippets.find(s => s.prop === snippetProp)
  } catch (err) {
    return null
  }
}

export default getSnippet
