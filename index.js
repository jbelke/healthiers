import express from 'express'
import addClient from './client'
import addGraphQLServer from './graphql-server'
import config, { port } from './config.json'

const services = [addGraphQLServer, addClient]

const app = services.reduce(
  (expressApp, service) => service(expressApp, config),
  express()
)

app.listen(port, () => console.log(`server is running on port ${port}`))
