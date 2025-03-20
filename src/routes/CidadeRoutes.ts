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

cidadeRoutes.get('/cidade', cidadesController.getFilter);

cidadeRoutes.put('/cidade/update-cep', cidadesController.updateByNome);
cidadeRoutes.put('/cidade/update-nome', cidadesController.updateByCep);

export {cidadeRoutes};