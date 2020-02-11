import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  soma(valor1: string, valor2:string): Number{
    const numero: Number = Number(valor1)+Number(valor2)  
    return (numero)
  }
}
