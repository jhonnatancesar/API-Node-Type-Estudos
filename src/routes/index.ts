import { Router } from "express";
import {cidadesController} from '../controllers';

const cidadeRoutes = Router();

cidadeRoutes.post('/cidade', 
    cidadesController.createValidantion, 
    cidadesController.create
);

cidadeRoutes.get('/cidades',  
    cidadesController.getAll
);

cidadeRoutes.get('/cidade/:id', cidadesController.getById);

export {cidadeRoutes};