import { Optional } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

import { TABLES } from 'common/constants';
import { Categories } from './categories.entity';

@Entity({ name: TABLES.CATEGORY_TYPES })
export class CategoryTypes {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  category_id!: number;

  @Column({})
  type!: string;

  @Column({ unique: false })
  created_at!: string;

  @Column({ unique: false })
  updated_at!: string;

  @Column({ nullable: true })
  @Optional()
  deleted_at!: string;

  @ManyToOne(() => Categories, (categories) => categories.types)
  @JoinColumn({ name: 'category_id' })
  categories: Categories;
}
