import config, { port } from '../config'
import express from 'express'
import addGraphQLServer from './index'
import addClient from '../../client'

const services = [addGraphQLServer, addClient]

const app = services.reduce((expressApp, service) => service(expressApp, config), express())

app.listen(port, () => console.log(`server is running on port ${port}`))
