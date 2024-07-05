import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { UserDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async singupUser(payload: UserDto): Promise<void> {}
}
