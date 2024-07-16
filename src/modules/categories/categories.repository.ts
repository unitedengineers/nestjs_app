import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Categories } from './categories.entity';
import { units } from 'common/constants/units';

export class CategoriesRepository {
  constructor(
    @InjectRepository(Categories)
    private readonly categoriesRepository: Repository<Categories>,
  ) {}

  async save(): Promise<void> {
    const newCategories = this.categoriesRepository.create(
      units.map((unit) => ({
        name: unit.name,
      })),
    );
    console.log('newCategories: ', newCategories);
    await this.categoriesRepository.save(newCategories);
  }

  async getCategories(): Promise<Categories[]> {
    return this.categoriesRepository.find();
  }
}
