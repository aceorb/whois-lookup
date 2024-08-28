import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainController } from './domain/domain.controller';
import { DomainModule } from './domain/domain.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DomainModule,
  ],
  controllers: [AppController, DomainController],
  providers: [AppService],
})
export class AppModule {}
