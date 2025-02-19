import { Test, TestingModule } from '@nestjs/testing';
import { CardRequestController } from './card-request.controller';
import { CardRequestService } from './card-request.service';

describe('CardRequestController', () => {
  let controller: CardRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardRequestController],
      providers: [CardRequestService],
    }).compile();

    controller = module.get<CardRequestController>(CardRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
