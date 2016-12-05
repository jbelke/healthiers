import bcrypt from 'bcryptjs'

export default function compare(password, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (error, matches) => {
      if (error) {
        reject(error)
      } else {
        resolve(matches)
      }
    })
  })
}
