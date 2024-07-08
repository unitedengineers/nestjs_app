import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Public } from 'common/decorrators';

import { AuthService } from './auth.service';
import { UserDto, UserResponseDto } from './auth.dto';
import { ROUTE_PATHS } from './auth.constants';

@ApiTags(ROUTE_PATHS.auth)
@Controller(ROUTE_PATHS.auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  @HttpCode(201)
  signup(@Body() payload: UserDto): Promise<UserResponseDto> {
    return this.authService.singupUser(payload);
  }

  @Public()
  @Post('signin')
  @HttpCode(201)
  async login(@Body() payload: UserDto): Promise<UserResponseDto> {
    return this.authService.loginUser(payload);
  }
}
