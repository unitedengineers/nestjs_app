import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bycrypt from 'bcrypt';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
  
  @BeforeInsert()
  async hashPassword(){
    const saltOrRounds=10;
    this.password = await bycrypt.hash(this.password, saltOrRounds);
  }

  

}