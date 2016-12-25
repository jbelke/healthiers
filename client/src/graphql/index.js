import { Observable } from 'rxjs'
import { createClient } from './client'

export const gqlPromise = createClient('http://localhost:3000/api', () => localStorage.getItem('token'))
export const gqlObservable = (query, variables) => Observable.fromPromise(gqlPromise(query, variables))
