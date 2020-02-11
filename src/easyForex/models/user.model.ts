import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email:{type: String, required: true},
    dataValidade: {type: Number, required: true},
    isTeste: {type: Boolean, required: true},
    tradeNumber: {type: String, required: true},
    nome: {type: String, required: true},
    tipoLicenca: {type: String, required: true},
});

export interface User extends Document {
    id: string;
    email: String,
    dataValidade: Number,
    isTeste: Boolean,
    tradeNumber: String,
    nome: String,
    tipoLicenca: String,
  }