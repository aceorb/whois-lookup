import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DomainService } from './domain.service';
import { DomainRequestType } from '../common/types';

@ApiTags('Domain')
@Controller('domain')
export class DomainController {
  constructor(private readonly domainService: DomainService) {}

  @Get()
  async getWhoisData(
    @Query('domain') domain: string,
    @Query('type') type: DomainRequestType,
  ) {
    return this.domainService.getWhoisData(domain, type);
  }
}
