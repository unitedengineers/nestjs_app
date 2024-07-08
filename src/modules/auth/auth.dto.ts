import { User } from './auth.entity';

export class UserDto {
  email: string;
  password: string;
}

export class UserResponseDto extends User {
  accessToken: string;
}
