import { Module } from '@nestjs/common';
import { CardRequestService } from './card-request.service';
import { CardRequestController } from './card-request.controller';
import { PrismaService } from 'src/utils';

@Module({
  controllers: [CardRequestController],
  providers: [CardRequestService, PrismaService],
})
export class CardRequestModule {}
