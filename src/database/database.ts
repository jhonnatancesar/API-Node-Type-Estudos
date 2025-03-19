import 'dotenv/config';
import mongoose from "mongoose";

const mongoURL: string = process.env.URL_CONNECTION || '';

export const bdConnection = () =>{
    mongoose.connect(mongoURL)
    .then(() => console.log('Conectado ao banco!'))
    .catch((err: Error) => console.error('Erro ao conectar ao Banco: ', err));
};