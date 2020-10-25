import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app-config.module';

import configuration from './config/configuration';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRoot(`mongodb://${configuration().database.host}:${configuration().database.port}`,
      {
        auth: {
          user: configuration().database.user,
          password: configuration().database.password,
        },
        useNewUrlParser: true,
        dbName: configuration().database.name
      }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
