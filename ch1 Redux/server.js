import express from 'express';
import fs, { readFileSync } from 'fs';
import cors from 'cors'

const server = express()

server.use(cors())

server.get('/', (req, res) => {
    const fsData = readFileSync('db.json', 'utf-8')
    res.send(fsData)
})

server.listen(8080, () => {
    console.log('server started')
})