// Required external libraries
import express from 'express'
import http from 'http'
import { getNodes } from './server/nodes'
import { ioConnect } from './server/socket'

const app = express()

// Server config
const server = http.createServer(app)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// API - http
app.get('/nodes', (req, res) => { res.json(getNodes()) })

// Web Socket
const io = require('socket.io')(server)
io.on('connection', ioConnect)

// Deploy
const port: number = 8333
console.log(`Tracker listening on ${port}`)
server.listen(port)