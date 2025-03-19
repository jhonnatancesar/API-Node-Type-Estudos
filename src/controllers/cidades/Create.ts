import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { ICidade, CidadeCep, bodyValidation } from "../../database/models/models";
import { validationBody } from '../../shared/middleware/Validation';

export const createValidantion = validationBody(bodyValidation);

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    //Insere no banco e retorna um accepted com a mensagem no body dizendo "Criado no Banco!"
    const data = new CidadeCep(req.body);
    console.log(data);
    await data.save();
    res.status(StatusCodes.ACCEPTED).send('Criado no Banco!');
};