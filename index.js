require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
const server = express()
require('./DB/connection')

const PORT = 3000 || process.env.PORT

server.use(cors())
server.use(express.json())
server.use(router)


server.listen(PORT, () => {
    console.log("Server Runinng");
})

server.get('', (req, res) => {
    res.send('<h1>Server is ON</h1>')
})