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

cidadeRoutes.get('/cidade/nome', cidadesController.createValidantionFilterNome, cidadesController.getFilter);
cidadeRoutes.get('/cidade/cep', cidadesController.createValidantionFilterCep, cidadesController.getFilter);

cidadeRoutes.put('/cidade/update-cep', cidadesController.createValidantionFilterCep, cidadesController.updateByCep);
cidadeRoutes.put('/cidade/update-nome', cidadesController.createValidantionFilterNome, cidadesController.updateByNome);

export {cidadeRoutes};