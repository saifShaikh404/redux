import express from 'express';
import cors from 'cors';

let server = express()

server.use(cors())

server.get('/:id', (req, res) => {
    let id = req.params.id
    let data = [{amount: 200}, {amount:400}, {amount:600}, {amount:800}, {amount:1000}]
    res.json(data[id])
})

server.listen(8080)