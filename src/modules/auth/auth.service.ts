import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthRepository } from './auth.repository';
import { LoginDto, UserDto } from './auth.dto';
import { User } from './auth.entity';
import { hashPassword, verifyPassword } from 'common/utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async singupUser(payload: UserDto): Promise<User> {
    const existingUser = await this.authRepository.findByEmail(payload.email);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    payload.password = await hashPassword(payload.password);
    return this.authRepository.createUser(payload);
  }

  async validateUser(payload: UserDto): Promise<boolean> {
    const user = await this.authRepository.findByEmail(payload.email);
    const isValidUser = await verifyPassword(user.password, payload.password);
    if (user && isValidUser) {
      return true;
    }
    return false;
  }

  async loginUser(payload: UserDto): Promise<LoginDto> {
    const isValidUser: boolean = await this.validateUser(payload);
    if (!isValidUser) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
