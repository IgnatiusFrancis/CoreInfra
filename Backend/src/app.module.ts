import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from './utils';
import { GlobalExceptionFilter } from './utils/filters/httpExceptionFilter';
import { CardRequestModule } from './card-request/card-request.module';
import { CardProfileModule } from './card-profile/card-profile.module';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [ConfigModule, CardRequestModule, CardProfileModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
