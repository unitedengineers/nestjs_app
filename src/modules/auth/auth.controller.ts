import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDto } from './auth.dto';
import { Users } from './auth.entity';
import { ROUTE_PATHS } from './auth.constants';
import { Public } from 'common/decorrators';

@ApiTags(ROUTE_PATHS.auth)
@Controller(ROUTE_PATHS.auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  @HttpCode(201)
  signup(@Body() payload:UserDto): Promise<Users>{
    return this.authService.singupUser(payload);
  }

  @Public()
  @Post('signin')
  @HttpCode(201)
  async login(@Body() payload: UserDto): Promise<{accessToken:string}> {
    return this.authService.loginUser(payload);
  }
}
