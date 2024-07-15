import { Controller, Get, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { UsersService } from "./users.service";
import { Public } from 'common/decorrators';
import { UserDto, UserResponseDto } from '../auth/auth.dto';
// import { UserFilterDto } from './users.dto';
// import { UserResponseDto } from 'modules/auth/auth.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Public()
  getAllUsers(): Promise<any> {
    return this.usersService.getAllUsers();
  }

  @Public()
  @Post('filter')
  @HttpCode(HttpStatus.OK)
  async getByEmail(@Body() payload: UserDto): Promise<UserResponseDto| any>{
    const email = payload.email;
    if (email) {
      // return Promise.resolve('Success');
      return this.usersService.findByEmail(email);
    }
    return Promise.resolve('Missing email');
  }

}
