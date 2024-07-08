import { AppEntity } from './app.entity';
import { CreateTestDto } from './app.dto';

export class AppRepository {
  async getData(): Promise<AppEntity[]> {
    return [];
  }

  async create(request: CreateTestDto): Promise<AppEntity> {
    return null;
  }
}
