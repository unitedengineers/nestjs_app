import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfigs } from './appConfigs.enum';

dotenv.config();

export const getConfigKeyValue = (key: AppConfigs) => {
  return process.env[key];
};

export const getDBConfig = (): TypeOrmModuleOptions => {
  const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: getConfigKeyValue(AppConfigs.HOST),
    port: Number(getConfigKeyValue(AppConfigs.PORT)),
    username: getConfigKeyValue(AppConfigs.DB_USERNAME),
    password: getConfigKeyValue(AppConfigs.PASSWORD),
    database: getConfigKeyValue(AppConfigs.DB_NAME),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true, // Set to false in production
    logger: 'simple-console',
    logging: true,
  };

  return typeOrmConfig;
};
