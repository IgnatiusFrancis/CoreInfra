import { Test, TestingModule } from '@nestjs/testing';
import { CardProfileController } from './card-profile.controller';
import { CardProfileService } from './card-profile.service';

describe('CardProfileController', () => {
  let controller: CardProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardProfileController],
      providers: [CardProfileService],
    }).compile();

    controller = module.get<CardProfileController>(CardProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
