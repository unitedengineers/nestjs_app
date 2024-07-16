import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';

import { AuthGuard } from 'common/guards/auth.guards';
import { getDBConfig } from 'configs/index';
import { AuthModule } from 'modules/auth/auth.module';
import { UsersModule } from 'modules/users/users.module';
import { LoggingMiddleware } from 'common/middlewares';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';

@Module({
  imports: [TypeOrmModule.forRoot(getDBConfig()), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, AppRepository, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware);
  }
}
