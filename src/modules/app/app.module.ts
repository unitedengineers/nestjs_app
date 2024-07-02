import { Module, NestModule } from '@nestjs/common';
import { AuthModule } from 'modules/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule implements NestModule {
  public configure(): void {}
}
