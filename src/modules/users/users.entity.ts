import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { TABLES } from '../../commons/constants';

@Entity({ name: TABLES.USERS })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;
}
