import express from 'express';

const server = express();

server.use(express.json());
server.get('/', (_req, res) => {
    res.send('Hola mundo');
})

module.exports = server;