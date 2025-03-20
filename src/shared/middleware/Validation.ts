import { RequestHandler} from "express";
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

// Tipo para função que recebe um schema Yup e devolve um middleware Express.
// Esse middleware valida o req.body antes de continuar a rota.
type TValidation = <T extends object>(scheme: yup.ObjectSchema<T>) => RequestHandler;

export const validationBody: TValidation = (scheme) => async (req, res, next) => {
    try {
        await scheme.validate(req.body, { abortEarly: false });
        return next();
    } catch (error) {
        const yupError = error as yup.ValidationError;
        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (!error.path) return;
            validationErrors[error.path] = error.message;
        });

        res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: validationErrors,
            }
        });
    }
};
