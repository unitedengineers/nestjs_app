import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { AppEntity } from './app.entity';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  async getHello(): Promise<AppEntity[]> {
    return this.appRepository.getData();
  }

  async createData(request: AppEntity): Promise<AppEntity> {
    return this.appRepository.create(request);
  }
}
