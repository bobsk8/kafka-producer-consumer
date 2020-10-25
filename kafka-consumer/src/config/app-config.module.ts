import { Global, Module } from '@nestjs/common';

import { AppConfigService } from './app-config.service';
import { ConfigModule } from '@nestjs/config';
import configuration, { validationSchema } from './configuration';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: validationSchema
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService]
})
export class AppConfigModule {}
