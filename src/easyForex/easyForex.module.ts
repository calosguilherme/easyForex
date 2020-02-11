import { Module } from '@nestjs/common';
import { UserSchema } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './services/users.service';
import { UserController } from './controller/user.controller';


@Module({
  imports:  [
    MongooseModule.forFeature([{
        name: 'User', schema: UserSchema,
      }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class EasyForexModule {}
