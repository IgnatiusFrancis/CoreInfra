import { Test, TestingModule } from '@nestjs/testing';
import { CardProfileService } from './card-profile.service';

describe('CardProfileService', () => {
  let service: CardProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardProfileService],
    }).compile();

    service = module.get<CardProfileService>(CardProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
