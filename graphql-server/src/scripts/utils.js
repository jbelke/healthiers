import chalk from 'chalk'
import path from 'path'
import fs from 'fs'

export const ok = '✓'
export const nok = '✖'

export const warn = message => console.log(chalk.yellow(message))
export const success = message => console.log(chalk.green(message))
export const error = message => console.log(chalk.red(message))
export const fatalError = message => { 
  error(message)
  process.exit(1) 
}

export const lf = (n = 1) => console.log(new Array(n).fill('').join('\n'))
export const json = (basedir, relPath) => JSON.parse(fs.readFileSync(path.join(basedir, relPath)))
export const createMany = (factory, amount) => new Array(amount).fill(null).map(() => factory())
