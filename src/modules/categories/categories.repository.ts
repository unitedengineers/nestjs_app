import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Categories } from './entities/categories.entity';

export class CategoriesRepository {
  constructor(
    @InjectRepository(Categories)
    private readonly categoriesRepository: Repository<Categories>,
  ) {}

  async getCategories(): Promise<Categories[]> {
    return this.categoriesRepository.find({
      relations: ['subCategories'],
    });
  }
}
