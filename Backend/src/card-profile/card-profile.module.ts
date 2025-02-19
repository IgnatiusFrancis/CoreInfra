import { Module } from '@nestjs/common';
import { CardProfileService } from './card-profile.service';
import { CardProfileController } from './card-profile.controller';

@Module({
  controllers: [CardProfileController],
  providers: [CardProfileService],
})
export class CardProfileModule {}
