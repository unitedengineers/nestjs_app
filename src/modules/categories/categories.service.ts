import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { Categories } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async storeCategories(): Promise<void> {
    await this.categoriesRepository.save();
  }

  async getCategories(): Promise<Categories[]> {
    return this.categoriesRepository.getCategories();
  }
}
