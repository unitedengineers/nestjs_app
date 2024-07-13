import { User } from './auth.entity';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

export class UserResponseDto extends User {
  accessToken: string;
}
