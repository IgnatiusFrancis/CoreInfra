import { Module } from '@nestjs/common';
import { CardProfileService } from './card-profile.service';
import { CardProfileController } from './card-profile.controller';
import { PrismaService } from 'src/utils';

@Module({
  controllers: [CardProfileController],
  providers: [CardProfileService, PrismaService],
})
export class CardProfileModule {}
