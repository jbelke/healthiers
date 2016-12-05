import { sign as signJwt } from 'jsonwebtoken'

export default function sign(data, secret, options = {}) {
  return new Promise((resolve, reject) => {
    signJwt(data, secret, options, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })
  })
}
