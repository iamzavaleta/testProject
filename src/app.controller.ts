import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import * as request from 'supertest';
import { usuario } from './interfaces/usuario';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('usuarios')
  postUsuarios(@Body() request: usuario): string {
    console.log(request);
    return this.appService.getHello(request);
  }
}
