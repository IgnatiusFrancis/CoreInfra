import { Module } from '@nestjs/common';
import { CardRequestService } from './card-request.service';
import { CardRequestController } from './card-request.controller';

@Module({
  controllers: [CardRequestController],
  providers: [CardRequestService],
})
export class CardRequestModule {}
