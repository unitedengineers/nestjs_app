import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ROUTE_PATHS } from './categories.constants';
import { CategoriesService } from './categories.service';
import { Categories } from './entities/categories.entity';

@ApiTags(ROUTE_PATHS.categories)
@Controller(ROUTE_PATHS.categories)
@ApiBearerAuth()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getCategories(): Promise<Categories[]> {
    return this.categoriesService.getCategories();
  }
}
