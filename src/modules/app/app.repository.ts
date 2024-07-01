import { supabase } from 'configs/database';
import { TABLES } from 'common/constants/tables.enum';
import { AppEntity } from './app.entity';
import { CreateTestDto } from './app.dto';

export class AppRepository {
  async getData(): Promise<AppEntity[]> {
    const { data, error } = await supabase.from(TABLES.TEST).select('*');
    return data;
  }

  async create(request: CreateTestDto): Promise<AppEntity> {
    const { data, error } = await supabase.from(TABLES.TEST).upsert(request).select();
    return data && data.length ? data[0] : null;
  }
}
