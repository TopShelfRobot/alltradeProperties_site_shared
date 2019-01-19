import request from './request'

export const getFeaturedUnits = qs => request.get(`/prop/featured${qs ? '?' + qs : ''}`)
export const getTypes = () => request.get('/prop/types')
export const getNeighborhoods = () => request.get('/prop/neighborhoods')
export const getOfficeGroups = () => request.get('/prop/officeGroups')
export const getPropertyGroups = () => request.get('/prop/propertyGroups')
export const getUnits = query => request.post('/prop/units/search', query)
export const getUnit = unitID => request.get(`/prop/units/${unitID}`)
export const getOffices = () => request.get('/prop/offices')

export const getEvictionResources = () => request.get('/eviction')

// Contact form
export const generalContact = contact => request.post('/contact', contact)

// Snippets
export const getSnippets = () => request.get('/snippets')

// Team
export const getTeamMembers = () => request.get('/team')

// Community partners
export const getCommunityPartners = () => request.get('/partner')

export const getArticles = () => request.get('/articles')
