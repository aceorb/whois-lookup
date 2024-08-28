import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

import { whoisUrl } from '../common/constants/general.constants';
import { DomainRequestType } from '../common/types';

@Injectable()
export class DomainService {
  private readonly whoisApiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.whoisApiKey = this.configService.get<string>('whois_api_key');
  }

  async getWhoisData(domain: string, type: DomainRequestType): Promise<any> {
    const url = `${whoisUrl}?apiKey=${this.whoisApiKey}&domainName=${domain}&outputFormat=JSON`;
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      const data = response.data;
      if (type === 'domain') {
        return {
          domainName: data.WhoisRecord?.domainName,
          registrarName: data.WhoisRecord?.registrarName || 'N/A',
          registrationDate: data.WhoisRecord?.createdDate || 'N/A',
          expirationDate: data.WhoisRecord?.expiresDate || 'N/A',
          estimatedDomainAge: data.WhoisRecord?.estimatedDomainAge || 'N/A',
          hostnames: (data.WhoisRecord?.nameServers?.hostNames || [])
            .map((hostname: string) =>
              hostname.length > 25 ? hostname.slice(0, 25) + '...' : hostname,
            )
            .join(', '),
        };
      } else if (type === 'contact') {
        return {
          registrantName: data.WhoisRecord?.registrant?.name || 'N/A',
          technicalContactName:
            data.WhoisRecord?.technicalContact?.name || 'N/A',
          administrativeContactName:
            data.WhoisRecord?.administrativeContact?.name || 'N/A',
          contactEmail: data.WhoisRecord?.contactEmail || 'N/A',
        };
      }
    } catch (error) {
      throw new HttpException(
        'Failed to fetch data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
