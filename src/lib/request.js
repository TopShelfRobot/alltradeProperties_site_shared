import { toast } from 'react-toastify'
import axios from 'axios'

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
    const { status, statusText, data } = error.response
    const { message } = data || {}
    console.log(error.response)
    const errorText = message || `${status} - ${statusText}`
    toast.error(errorText)
    return Promise.reject(error)
  }
)

export default request
