import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { ICidade, CidadeCep } from "../../database/models/models";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const getById = async (req: Request<{}, {}, ICidade>, res: Response) => {
    const id = req.params;
    const data = await CidadeCep.find(id);
    res.status(StatusCodes.ACCEPTED).send(data);
};