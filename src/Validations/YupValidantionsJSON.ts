import * as yup from 'yup';
import { ICidade, IQueryUpdateCep, IQueryUpdateNome, IQueryFilterNome, IQueryFilterCep} from '../interface/Interfaces';

export const bodyValidation: yup.ObjectSchema<ICidade> = yup.object({
    nome: yup.string().required().min(3),
    cep: yup.string().required().min(8).max(8)
});

export const bodyValidationUpdateNome: yup.ObjectSchema<IQueryUpdateNome> = yup.object({
    cep: yup.string().required().min(8).max(8),
    novoNome: yup.string().required().min(3)
});

export const bodyValidationUpdateCep: yup.ObjectSchema<IQueryUpdateCep> = yup.object({
    nome: yup.string().required().min(3),
    novoCep: yup.string().required().min(8).max(8)
});

export const bodyValidationQueryFilterNome: yup.ObjectSchema<IQueryFilterNome> = yup.object({
    nome: yup.string().required().min(3)
});

export const bodyValidationQueryFilterCep: yup.ObjectSchema<IQueryFilterCep> = yup.object({
    cep: yup.string().required().min(8).max(8)
});