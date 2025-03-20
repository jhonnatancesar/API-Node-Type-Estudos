import 'dotenv/config';
import '../shared/services/TranslationsYup';
import express from 'express';
import { cidadeRoutes } from '../routes/CidadeRoutes';

const server = express();

server.get('/', (req, res) => {
    res.send('Ola, dev!'); 
});

server.use(express.json());
server.use(cidadeRoutes);

export {server};