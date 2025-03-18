import { Router } from "express";

import {cidadesController} from '../controllers';
const router = Router();

router.get('/', (req, res) => {
    res.send('Ola!');
});
router.post('/cidades', cidadesController.create);

export {router};