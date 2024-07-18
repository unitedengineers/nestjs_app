import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { User } from '../users/users.entity';
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
