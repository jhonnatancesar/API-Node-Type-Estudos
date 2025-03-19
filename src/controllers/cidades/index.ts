import * as create from './Create';
import * as getAll from './ListAll';
import * as getById from './ListById';
export const cidadesController = {
    ...create,
    ...getAll,
    ...getById
};