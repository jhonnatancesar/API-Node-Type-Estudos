import { Router } from "express";

import {cidadesController} from '../controllers';
const router = Router();

router.get('/', (req, res) => {
    res.send('Ola!');
});

router.post('/cidades', 
    cidadesController.createValidantion, 
    cidadesController.create
);

router.get('/cidades',  
    cidadesController.getAll
);

router.get('/cidade/:id', cidadesController.getById);

export {router};