const axios = require('axios')

const API_URL = process.env.GATSBY_API_URL

const request = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  // withCredentials: true,
  // transformRequest: [(data) => JSON.stringify(data.data)],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

request.interceptors.response.use(
  response => {
    if (!response.config.fullResponse) return response.data
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

module.exports = request
