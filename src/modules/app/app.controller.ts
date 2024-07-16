import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ROUTE_PATHS } from './app.constants';

@ApiTags(ROUTE_PATHS.test)
@Controller(ROUTE_PATHS.test)
@ApiBearerAuth()
export class AppController {
  constructor() {}

  @Get()
  getData(): any[] {
    return [];
  }
}
