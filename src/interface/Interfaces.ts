
export interface ICidade{
    nome: string;
    cep: string;
}

export interface IQueryUpdateNome{
    cep: string;
    novoNome: string;
}

export interface IQueryUpdateCep{
    nome: string;
    novoCep: string;
}

export interface IQueryFilterNome{
    nome: string;
}

export interface IQueryFilterCep{
    cep: string;
}
