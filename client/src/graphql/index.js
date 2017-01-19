import { Observable } from 'rxjs'
import axios from 'axios'
import isDefined from 'mini-dash/isDefined'

const createHeaders = (token = null) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  if (isDefined(token)) {
    headers['Authorization'] = `Bearer ${token}`
  }
  return headers
}

const createBody = (query, variables = null) => {
  const body = { query }
  if (isDefined(variables)) {
    body.variables = variables
  }
  return body
}

const createConfig = (url, query, variables = null, token = null) => ({
  url,
  method: 'post',
  data: createBody(query, variables),
  headers: createHeaders(token),
  transformResponse: response => {
    const {data, errors} = JSON.parse(response)
    if (errors && errors.length) {
      throw errors
    }
    return data
  },
  validateStatus: () => true //always valid so the error format can be consistent
})

const createClient = (url, token = () => null) => (query, variables = null) => axios(
  createConfig(url, query, variables, token())
).then(response => response.data)

export const gqlPromise = createClient('http://localhost:3000/api', () => localStorage.getItem('token'))
export const gqlObservable = (query, variables = null) => Observable.fromPromise(gqlPromise(query, variables))
