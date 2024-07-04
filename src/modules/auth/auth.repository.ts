import { supabase } from 'configs/database';
import { TABLES } from 'common/constants/tables.enum';
import { UserDto } from './auth.dto';

export class AuthRepository {
  async singupUser(payload: UserDto): Promise<void> {}
}
