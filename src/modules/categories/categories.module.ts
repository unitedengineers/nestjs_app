import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Categories } from './entities/categories.entity';
import { CategoriesRepository } from './categories.repository';
import { SubCategories } from './entities/subCategories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categories, SubCategories])],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesRepository],
})
export class CategoriesModule {}
