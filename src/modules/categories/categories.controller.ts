import { Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ROUTE_PATHS } from './categories.constants';
import { CategoriesService } from './categories.service';
import { Categories } from './categories.entity';

@ApiTags(ROUTE_PATHS.categories)
@Controller(ROUTE_PATHS.categories)
@ApiBearerAuth()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  storeCategories(): Promise<void> {
    return this.categoriesService.storeCategories();
  }

  @Get()
  getCategories(): Promise<Categories[]> {
    return this.categoriesService.getCategories();
  }
}
