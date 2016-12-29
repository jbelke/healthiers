import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export function compare(password, hashValue) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashValue, (error, matches) => {
      if (error) {
        reject(error)
      } else {
        resolve(matches)
      }
    })
  })
}

export function sign(data, secret, options = {}) {
  return new Promise((resolve, reject) => {
    jwt.sign(data, secret, options, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })
  })
}

export function hash(password, length = 8) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, length, (error, hashedString) => {
      if (error) {
        reject(error)
      } else {
        resolve(hashedString)
      }
    })
  })
}

export function hashSync(password, length = 8) {
  return bcrypt.hashSync(password, length)
}
