import { Optional } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { TABLES } from 'common/constants';

import { CategoryTypes } from './categoryTypes.entity';

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

  @OneToMany(() => CategoryTypes, (categoryType) => categoryType.categories)
  types: CategoryTypes[];
}
