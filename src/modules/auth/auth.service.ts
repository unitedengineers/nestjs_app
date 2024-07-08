import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { AuthRepository } from './auth.repository';
import { LoginDto, UserDto } from './auth.dto';
import { User } from './auth.entity';

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
    payload.password = await bcrypt.hash(payload.password, 10);
    return this.authRepository.createUser(payload);
  }

  async validateUser(payload: UserDto): Promise<any> {
    const user = await this.authRepository.findByEmail(payload.email);
    if (user && (await bcrypt.compare(payload.password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginUser(payload: UserDto): Promise<LoginDto> {
    const user = await this.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
