import serveStatic from 'serve-static'
import { join, resolve } from 'path'

export default function addClient(app) {
  app.get('/', serveStatic(join(__dirname, '..', 'dist')))
  app.get('*', (req, res) => res.sendFile(resolve(__dirname, '..', 'dist', 'index.html')))
  return app
}
