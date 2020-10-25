import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import configuration from './config/configuration';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${configuration().database.host}:${configuration().database.port}`,
      {
        auth: {
          user: configuration().database.user,
          password: configuration().database.password,
        },
        useNewUrlParser: true,
        dbName: configuration().database.name
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
