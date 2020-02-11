import * as mongoose from 'mongoose';

export const VendedorSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    permissao: Number,
})

export interface Vendedor extends Document{
    id: string,
    nome: string,
    email: string,
    senha: string,
    permissao: number,
}