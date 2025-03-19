<<<<<<< Updated upstream
=======
import 'dotenv/config';
import '../shared/services/TranslationsYup';
>>>>>>> Stashed changes
import express from 'express';


const server = express();

server.get('/', (req, res) => {
    res.send('Ola, dev!'); 
});

export {server};