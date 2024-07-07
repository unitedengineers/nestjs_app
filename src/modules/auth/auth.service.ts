import { Injectable,UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';
import { UserDto } from './auth.dto';
import { Repository } from 'typeorm';
import { Users } from './auth.entity';
import * as bycrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository,
    private readonly jwtService:JwtService
  ) {}

  async singupUser(payload: UserDto): Promise<Users> {
    return this.authRepository.createUser(payload);
  }


  async validateUser(payload:UserDto):Promise<any>{
    const user = await this.authRepository.findByEmail(payload.email);
    if (user && await bycrypt.compare(payload.password,user.password)){
      const { password, ...result } = user;
      return result;
    }
    return null;
  }


  async loginUser(payload:UserDto):Promise<{accessToken:string}>{
    const user = await this.validateUser(payload);
    if (!user){
      throw new UnauthorizedException('Invalid Credentials')
    }
    return{
    accessToken:this.jwtService.sign(payload)
    }
  }


}
