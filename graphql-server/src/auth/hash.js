import bcrypt from 'bcryptjs'

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
