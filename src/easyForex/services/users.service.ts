import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {
  }

  async create(doc: User) {
    const result = await new this.userModel(doc).save();
    return result;
  }

  async findById(id: number) {
    const result = await this.userModel.findById(id).exec();
    return result;
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findByAccount(account: string) {
    const result = await this.userModel.findOne({tradeNumber: account}).exec();
    return result;
  }

  async update(user: User) {
    // ...
  }

  async remove(user: User) {
    // ...
  }
}