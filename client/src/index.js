import serveStatic from 'serve-static'
import { join, resolve, extname } from 'path'
import { existsSync } from 'fs'
import last from 'mini-dash/last'

const distPath = resolve(__dirname, '..', 'dist')
const indexPath = join(distPath, 'index.html')
const knownExtensions = ['.woff', '.woff2', '.ttf', '.eot', '.svg', '.ttf', '.js', '.html', '.css']

// TODO this is turning out to be a big mess with the paths... Need help refactoring it to something sensible.
function resolveFile(path) {
  const fileName = last(path.split('/'))
  const distFilePath = join(distPath, fileName)
  if (knownExtensions.indexOf(extname(fileName)) >= 0 && existsSync(distFilePath)) {
    return distFilePath
  }
  return indexPath
}

export default function addClient(app) {
  app.use('/', serveStatic(join(__dirname, '../dist'), {}))
  app.get('*', (req, res) => res.sendFile(resolveFile(req.originalUrl)))
  return app
}
