import { Injectable } from '@nestjs/common';
import { usuario } from './interfaces/usuario';

@Injectable()
export class AppService {

  usuarios: usuario[] = []

  getHello(request: usuario): any {
    try {
      this.usuarios.push(request)
      console.log(this.usuarios)
      return {
        "status": 201,
        "message": "Usuario registrado correctamente"
      };
    } catch (error) {
      console.log(error)
    }
  }
}
