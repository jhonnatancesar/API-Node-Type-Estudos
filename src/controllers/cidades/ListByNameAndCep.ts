import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { ICidade, CidadeCep } from "../../database/models/models";
import { validationBody } from "../../shared/middleware";
import { bodyValidationQueryFilterNome,bodyValidationQueryFilterCep } from "../../Validations";

export const createValidantionFilterNome = validationBody(bodyValidationQueryFilterNome);

export const createValidantionFilterCep = validationBody(bodyValidationQueryFilterCep);
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const getFilter = async (req: Request<{}, {}, ICidade>, res: Response) => {
    try {
        const data = req.body;
        const query = await CidadeCep.find(data);

        if (query.length === 0) {
            res.status(StatusCodes.NOT_FOUND).json({
                errors: { default: "Nenhum registro encontrado no banco." }
            });
            return;
        }
        res.status(StatusCodes.OK).send(query);

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: "Erro ao buscar no banco." }
        });
    }

};