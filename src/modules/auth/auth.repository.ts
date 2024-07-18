import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './auth.dto';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';

export class AuthRepository {
  constructor(
    @InjectRepository(User)
    private readonly authRepository: Repository<User>,
  ) {}

  async createUser(payload: UserDto): Promise<User> {
    const newUser = this.authRepository.create(payload);
    return this.authRepository.save(newUser);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.authRepository.findOne({ where: { email } });
  }
}
