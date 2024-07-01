import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AppEntity } from './app.entity';
import { CreateTestDto } from './app.dto';
import { ROUTE_PATHS } from './app.constants';

@ApiTags(ROUTE_PATHS.test)
@Controller(ROUTE_PATHS.test)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Promise<AppEntity[]> {
    return this.appService.getData();
  }

  @Post()
  @HttpCode(201)
  createData(@Body() request: CreateTestDto): Promise<AppEntity> {
    return this.appService.createData(request);
  }
}
