import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { DomainService } from './domain.service';
import { DomainController } from './domain.controller';

@Module({
  imports: [HttpModule],
  providers: [DomainService],
  controllers: [DomainController],
  exports: [DomainService],
})
export class DomainModule {}
