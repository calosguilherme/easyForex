import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/soma/:valor1/:valor2')
  soma(@Param() params): Number {
    return this.appService.soma(params.valor1, params.valor2);
  }
}
