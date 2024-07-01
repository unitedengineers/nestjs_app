import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AppEntity } from './app.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<AppEntity[]> {
    return this.appService.getHello();
  }

  @Post()
  @HttpCode(201)
  createData(@Body() request: AppEntity): Promise<AppEntity> {
    return this.appService.createData(request);
  }
}
