import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AppConfigs } from 'configs/appConfigs.enum';
import { ConfigService } from 'configs/index';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: ConfigService.getConfigKeyValue(AppConfigs.JWT_SECRETE_KEY),
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
