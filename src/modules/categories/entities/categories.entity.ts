import { Optional } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { TABLES } from '../../../commons/constants';

import { SubCategories } from './subCategories.entity';

@Entity({ name: TABLES.CATEGORIES })
export class Categories {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ unique: false })
  created_at!: string;

  @Column({ unique: false })
  updated_at!: string;

  @Column({ nullable: true })
  @Optional()
  deleted_at!: string;

  @OneToMany(() => SubCategories, (subCategory) => subCategory.categories)
  subCategories: SubCategories[];
}
