import { Observable } from 'rxjs'
import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'
import axios from 'axios'

export const client = new Lokka({ transport: new Transport('http://localhost:3000/api') })
export const query = gql => Observable.fromPromise(axios.post(URL, gql))
export const mutate = (gql, args) => Observable.fromPromise(client.mutate(gql, args))
