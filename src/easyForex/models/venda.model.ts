import * as mongoose from 'mongoose';
import { User } from './user.model';
import { Vendedor } from './vendedor.model';

export const VendaSchema = new mongoose.Schema({
    dataVenda: Date,
    user:{
        _id:String,
        tradeNumber: String,
        nome: String,
        tipoLicenca: String,
    },
    tipoLicenca: String,
    valorPago: Number,
    metodoPagamento: Number,
    tipoVenda: Number,
    vendedor:{
        _id: String,
        nome: String,
    }
})


export interface Venda extends Document{
    id: string;
    dataVenda: Date,
    user: User,
    tipoLicenca: string,
    valorPago: number,
    metodoPagamento: number,
    tipoVenda: number,
    vendedor: Vendedor,
}