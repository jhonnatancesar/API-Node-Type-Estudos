import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { ICidade, CidadeCep, bodyValidation } from "../../database/models/models";
import { validationBody } from '../../shared/middleware/Validation';
import { bodyValidationUpdateCep, bodyValidationUpdateNome } from "../../validations";

export const createValidantionFilterNome = validationBody(bodyValidationUpdateNome);
export const createValidantionFilterCep = validationBody(bodyValidationUpdateCep);

export const updateByNome = async (req: Request, res: Response) => {
    try {
        const { cep, novoNome } = req.body;

        const resultado = await CidadeCep.findOneAndUpdate(
            { cep },                // filtro de busca
            { nome: novoNome },        // o que vai atualizar
            { new: true }
        );

        if (!resultado) {
            res.status(StatusCodes.NOT_FOUND).json({ error: "Cidade não encontrada." });
            return;
        }

        res.status(StatusCodes.OK).json(resultado);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Erro ao atualizar." });
    }
};

export const updateByCep = async (req: Request, res: Response) => {
    try {
        const { nome, novoCep } = req.body;

        const resultado = await CidadeCep.findOneAndUpdate(
            { nome },                // busca pelo CEP
            { cep: novoCep },     // atualiza o NOME
            { new: true }
        );

        if (!resultado) {
            res.status(StatusCodes.NOT_FOUND).json({ error: "Cidade não encontrada." });
            return;
        }

        res.status(StatusCodes.OK).json(resultado);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Erro ao atualizar." });
    }
};


