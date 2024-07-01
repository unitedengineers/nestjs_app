import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { AppEntity } from './app.entity';
import { CreateTestDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  async getData(): Promise<AppEntity[]> {
    return this.appRepository.getData();
  }

  async createData(request: CreateTestDto): Promise<AppEntity> {
    return this.appRepository.create(request);
  }
}
