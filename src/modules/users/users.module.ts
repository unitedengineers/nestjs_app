import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { getConfigKeyValue } from 'configs/index';
import { AppConfigs } from 'configs/appConfigs.enum';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: getConfigKeyValue(AppConfigs.JWT_SECRETE_KEY),
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
