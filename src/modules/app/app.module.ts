import { Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthModule } from 'modules/auth/auth.module';
import { AuthGuard } from 'common/guards/auth.guards';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, AppRepository, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule implements NestModule {
  public configure(): void {}
}
