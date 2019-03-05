const DEFAULT_FORM = {
  search: '',
  type: '',
  neighborhood: '',
  officeGroup: '',
  beds: [1, 6],
  baths: [1, 6],
  rent: ['', ''],
  section8: false,
  petsAllowed: false,
  laundry: false,
  utilities: false,
  movein: false,
}

export const getQueryFromLocation = () => {
  const qs = window.location.search
  return querystringToQuery(qs)
}

export const getDefaultForm = (...args) => {
  const argFormSets = args || []
  const formSets = [DEFAULT_FORM, ...argFormSets]
  const form = formSets.reduce((acc, formSet) => ({ ...acc, ...formSet }), {})

  return form
}

export const queryToQuerystring = query => {
  const qsParts = []

  if (query.search) qsParts.push('search=' + query.search)
  if (query.type) qsParts.push('type=' + query.type)
  if (query.neighborhood) qsParts.push(`neighborhood=${query.neighborhood}`)
  if (query.officeGroup) qsParts.push(`officeGroup=${query.officeGroup}`)
  if (query.propertyGroup) qsParts.push(`propertyGroup=${query.propertyGroup}`)
  if (query.beds && query.beds[0] !== '' && query.beds[0] > 1) qsParts.push(`bedsMin=${query.beds[0]}`)
  if (query.beds && query.beds[1] !== '' && query.beds[1] < 6) qsParts.push(`bedsMax=${query.beds[1]}`)
  if (query.baths && query.baths[0] !== '' && query.baths[0] > 1) qsParts.push(`bathsMin=${query.baths[0]}`)
  if (query.baths && query.baths[1] !== '' && query.baths[1] < 6) qsParts.push(`bathsMax=${query.baths[1]}`)
  if (query.rent && query.rent[0] !== '') qsParts.push(`rentMin=${query.rent[0]}`)
  if (query.rent && query.rent[1] !== '') qsParts.push(`rentMax=${query.rent[1]}`)
  if (query.section8) qsParts.push('section8=1')
  if (query.petsAllowed) qsParts.push('petsAllowed=1')
  if (query.laundry) qsParts.push('laundry=1')
  if (query.utilities) qsParts.push('utilities=1')
  if (query.movein) qsParts.push('movein=1')

  const qs = qsParts.join('&')
  return qs
}

export const querystringToQuery = qs => {
  if (!qs) return {}
  if (qs.charAt(0) === '?') qs = qs.slice(1)

  const pairs = qs.split('&').map(keyVal => keyVal.split('='))

  const query = {}
  for (let pair of pairs) {
    const [key, value] = pair

    switch (key) {
      case 'bathsMin':
        query.baths = query.baths || [0, 6]
        query.baths[0] = value
        break
      case 'bathsMax':
        query.baths = query.baths || [0, 6]
        query.baths[1] = value
        break
      case 'bedsMin':
        query.beds = query.beds || [0, 6]
        query.beds[0] = value
        break
      case 'bedsMax':
        query.beds = query.beds || [0, 6]
        query.beds[1] = value
        break
      case 'rentMin':
        query.rent = query.rent || ['', '']
        query.rent[0] = value
        break
      case 'rentMax':
        query.rent = query.rent || ['', '']
        query.rent[1] = value
        break
      default:
        query[key] = value
    }
  }

  return query
}

export const queryToBody = query => {
  const body = {}

  if (query.search) body.search = query.search
  if (query.type) body.type = query.type
  if (query.neighborhood) body.neighborhood = query.neighborhood
  if (query.officeGroup) body.officeGroup = query.officeGroup
  if (query.propertyGroup) body.propertyGroup = query.propertyGroup
  if (query.beds) {
    body.beds = [query.beds[0] > 1 ? query.beds[0] : null, query.beds[1] || null]
  }
  if (query.baths) {
    body.baths = [query.baths[0] > 1 ? query.baths[0] : null, query.baths[1] || null]
  }
  if (query.rent) {
    body.rent = [query.rent[0] || null, query.rent[1] || null]
  }
  if (query.section8) body.section8 = 1
  if (query.petsAllowed) body.petsAllowed = 1
  if (query.laundry) body.laundry = 1
  if (query.utilities) body.utilities = 1
  if (query.movein) body.movein = 1

  body.page = query.page || 1
  body.pageSize = query.pageSize || 9

  return body
}
