import * as dotenv from 'dotenv';
import { AppConfigs } from './appConfigs.enum';
export * from './database';

dotenv.config();
export class ConfigService {
  static getConfigKeyValue(key: AppConfigs) {
    return process.env[key];
  }
}
