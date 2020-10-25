import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './database-config.interface';

@Injectable()
export class AppConfigService {

  constructor(private configService: ConfigService) { }

  getDatabaseConfig(): DatabaseConfig {
    return this.configService.get<DatabaseConfig>('database');
  }

}
