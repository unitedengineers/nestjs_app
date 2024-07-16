import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { AuthGuard } from 'common/guards';
import { getConfigKeyValue, getDBConfig } from 'configs/index';
import { AuthModule } from 'modules/auth/auth.module';
import { UsersModule } from 'modules/users/users.module';
import { LoggingMiddleware } from 'common/middlewares';
import { CategoriesModule } from 'modules/categories/categories.module';
import { AppConfigs } from 'configs/appConfigs.enum';

import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDBConfig()),
    JwtModule.register({
      global: true,
      secret: getConfigKeyValue(AppConfigs.JWT_SECRETE_KEY),
      signOptions: { expiresIn: '60m' },
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware);
  }
}
