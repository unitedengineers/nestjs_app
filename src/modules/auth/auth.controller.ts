import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDto } from './auth.dto';
import { ROUTE_PATHS } from './auth.constants';

@ApiTags(ROUTE_PATHS.auth)
@Controller(ROUTE_PATHS.auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(201)
  signupUser(@Body() payload: UserDto): Promise<any> {
    return this.authService.singupUser(payload);
  }

  @Post('signin')
  @HttpCode(201)
  login(@Body() payload: UserDto): Promise<any> {
    return this.authService.singupUser(payload);
  }

  @Get('confirm')
  @HttpCode(201)
  confirm(payload: any): Promise<void> {
    console.log('payload: ', payload);
    return;
    // return this.authService.singupUser(payload);
  }
}
