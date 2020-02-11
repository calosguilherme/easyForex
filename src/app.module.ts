import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EasyForexModule } from './easyForex/easyForex.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EasyForexModule,
    MongooseModule.forRoot('mongodb+srv://calosguilherme:cg32124582657595852@cluster0-xdvgg.mongodb.net/easyForexDB?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}