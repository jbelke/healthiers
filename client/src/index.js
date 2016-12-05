import serveStatic from 'serve-static'
import { join } from 'path'

export default function addClient(app) {
  app.use('/', serveStatic(join(__dirname, '../dist')))
  return app
}
