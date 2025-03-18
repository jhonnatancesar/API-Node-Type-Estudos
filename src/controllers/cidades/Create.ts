import { Request, Response } from "express";

import { StatusCodes } from 'http-status-codes';

interface Cidade{
    nome: string;
    cep: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = (req: Request<{}, {}, Cidade>, res: Response) => {
    const data: Cidade = req.body;
    console.log(data);
    res.status(StatusCodes.ACCEPTED).send('Criado!');
};