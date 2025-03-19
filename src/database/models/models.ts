import mongoose, { Schema, model } from "mongoose";
import * as yup from 'yup';

export const db = mongoose;

export interface ICidade{
    nome: string;
    cep: string;
}

export const bodyValidation: yup.ObjectSchema<ICidade> = yup.object({
    nome: yup.string().required().min(3),
    cep: yup.string().required().min(8).max(8)
});

export const cidadeSchema = new Schema<ICidade>({
    nome: {type: String, required: true},
    cep: {type: String, required: true}
});

export const CidadeCep = model<ICidade>('cidade-cep', cidadeSchema);
