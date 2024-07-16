import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { hashPassword, verifyPassword } from 'common/utils';
import { AuthRepository } from './auth.repository';
import { UserDto, UserResponseDto } from './auth.dto';
import { User } from 'modules/users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async singupUser(payload: UserDto): Promise<UserResponseDto> {
    const existingUser = await this.authRepository.findByEmail(payload.email);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    payload.password = await hashPassword(payload.password);
    const user: User = await this.authRepository.createUser(payload);
    return {
      ...user,
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(payload: UserDto): Promise<User> {
    const user = await this.authRepository.findByEmail(payload.email);
    const isValidUser = await verifyPassword(user.password, payload.password);
    if (user && isValidUser) {
      return user;
    }
    return null;
  }

  async loginUser(payload: UserDto): Promise<UserResponseDto> {
    const user: User = await this.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    return {
      ...user,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
