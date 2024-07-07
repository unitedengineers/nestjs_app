import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AuthModule } from 'modules/auth/auth.module';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'aws-0-ap-southeast-1.pooler.supabase.com',
  port: 6543,
  username: 'postgres.zxcwjeuxxmgoieaumwpa',
  password: 'KSVFUVDZMftxRIxI',
  database: process.env.db_name || 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // Set to false in production
};
