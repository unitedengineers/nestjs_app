import { TABLES } from 'common/constants';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: TABLES.USERS })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
