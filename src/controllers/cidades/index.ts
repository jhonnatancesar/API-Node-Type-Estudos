import * as create from './Create';
import * as getAll from './ListAll';
import * as getById from './ListById';
import * as updateByCep from './Update' 
import * as updateByNome  from './Update';

export const cidadesController = {
    ...create,
    ...getAll,
    ...getById,
    ...updateByCep,
    ...updateByNome
};