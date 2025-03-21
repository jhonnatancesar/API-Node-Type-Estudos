import mongoose, { Schema, model } from "mongoose";
import * as yup from 'yup';
import { ICidade, IQueryUpdateCep, IQueryUpdateNome} from '../../interface/Interfaces';
import {bodyValidation} from '../../validations/index'
export const db = mongoose;

export const cidadeSchema = new Schema<ICidade>({
    nome: {type: String, required: true},
    cep: {type: String, required: true}
});

export const updateCepSchema = new Schema<IQueryUpdateCep>({
    nome: {type: String, required: true},
    novoCep: {type: String, required: true}
});

export const updateNomeSchema = new Schema<IQueryUpdateNome>({
    cep: {type: String, required: true},
    novoNome: {type: String, required: true}
});

export const CidadeCep = model<ICidade>('cidade-cep', cidadeSchema);
export { ICidade, bodyValidation};
