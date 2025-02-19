import { Module } from '@nestjs/common';
import { ConfigModule } from './utils';
import { GlobalExceptionFilter } from './utils/filters/httpExceptionFilter';
import { CardRequestModule } from './card-request/card-request.module';
import { CardProfileModule } from './card-profile/card-profile.module';

@Module({
  imports: [ConfigModule, CardRequestModule, CardProfileModule],
  providers: [
    {
      provide: 'APP_FILTER',
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
