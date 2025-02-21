// import { Test, TestingModule } from '@nestjs/testing';
// import { CardProfileController } from './card-profile.controller';
// import { CardProfileService } from './card-profile.service';

// describe('CardProfileController', () => {
//   let controller: CardProfileController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CardProfileController],
//       providers: [CardProfileService],
//     }).compile();

//     controller = module.get<CardProfileController>(CardProfileController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });

import { Test, TestingModule } from '@nestjs/testing';
import { CardProfileController } from './card-profile.controller';
import { CardProfileService } from './card-profile.service';
import { CreateFeeDto } from './dto/create-fee.dto';
import {
  Fee,
  Currency,
  FeeFrequency,
  FeeImpact,
  AccountPad,
} from '@prisma/client';

describe('CardProfileController', () => {
  let controller: CardProfileController;
  let service: CardProfileService;

  const mockCardProfileService = {
    createFee: jest.fn().mockImplementation((dto: CreateFeeDto) => ({
      id: 'fee123',
      name: dto.name,
      value: dto.value,
      currency: dto.currency,
      frequency: dto.frequency,
      feeImpact: dto.feeImpact,
      accountPad: dto.accountPad,
      account: dto.account || null,
    })),
    getFees: jest.fn().mockResolvedValue([
      {
        id: 'fee1',
        name: 'Processing Fee',
        value: 10.99,
        currency: Currency.USD,
        frequency: FeeFrequency.MONTHLY,
        feeImpact: FeeImpact.PIN_REISSUE,
        accountPad: AccountPad.NONE,
        account: 'SAVINGS',
      },
    ]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardProfileController],
      providers: [
        { provide: CardProfileService, useValue: mockCardProfileService },
      ],
    }).compile();

    controller = module.get<CardProfileController>(CardProfileController);
    service = module.get<CardProfileService>(CardProfileService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a fee', async () => {
    const dto: CreateFeeDto = {
      name: 'Processing Fee',
      value: 10.99,
      currency: Currency.USD,
      frequency: FeeFrequency.MONTHLY,
      feeImpact: FeeImpact.PIN_REISSUE,
      accountPad: AccountPad.NONE,
      account: 'SAVINGS',
    };

    expect(await controller.createFee(dto)).toEqual({
      id: 'fee123',
      ...dto,
    });
    expect(service.createFee).toHaveBeenCalledWith(dto);
  });

  it('should return all fees', async () => {
    expect(await controller.getFees()).toEqual([
      {
        id: 'fee1',
        name: 'Processing Fee',
        value: 10.99,
        currency: Currency.USD,
        frequency: FeeFrequency.MONTHLY,
        feeImpact: FeeImpact.PIN_REISSUE,
        accountPad: AccountPad.NONE,
        account: 'SAVINGS',
      },
    ]);
    expect(service.getFees).toHaveBeenCalled();
  });
});
