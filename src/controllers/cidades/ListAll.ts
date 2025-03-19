import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { ICidade, CidadeCep } from "../../database/models/models";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const getAll = async (req: Request<{}, {}, ICidade>, res: Response) => {
    //const data: CidadeCep = req.body;
    const data = await CidadeCep.find();
    res.status(StatusCodes.ACCEPTED).send(data);
};