const request = require('./request')

module.exports = {
  getFeaturedUnits: qs => request.get(`/prop/featured${qs ? '?' + qs : ''}`),
  getTypes: () => request.get('/prop/types'),
  getNeighborhoods: () => request.get('/prop/neighborhoods'),
  getOfficeGroups: () => request.get('/prop/officeGroups'),
  getPropertyGroups: () => request.get('/prop/propertyGroups'),
  getUnits: query => request.post('/prop/units/search', query),
  getUnit: unitID => request.get(`/prop/units/${unitID}`),
  getOffices: () => request.get('/prop/offices'),

  getEvictionResources: () => request.get('/eviction'),

  // Contact form
  generalContact: contact => request.post('/contact', contact),

  // Snippets
  getSnippets: () => request.get('/snippets'),

  // Team
  getTeamMembers: () => request.get('/team'),

  // Community partners
  getCommunityPartners: () => request.get('/partner'),
}
