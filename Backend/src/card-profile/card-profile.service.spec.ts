import { Test, TestingModule } from '@nestjs/testing';
import { CardProfileService } from './card-profile.service';
import { PrismaService } from '../utils/prisma';
import { CreateFeeDto } from './dto/create-fee.dto';
import { Currency, FeeFrequency, FeeImpact, AccountPad } from '@prisma/client';

describe('CardProfileService', () => {
  let service: CardProfileService;
  let prisma: PrismaService;

  const mockPrisma = {
    fee: {
      create: jest.fn().mockImplementation((data) => ({
        id: 'fee123',
        ...data.data,
      })),
      findFirst: jest.fn().mockResolvedValue(null),
      findMany: jest.fn().mockResolvedValue([
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
    },
    $transaction: jest.fn(async (callback) => callback(mockPrisma)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardProfileService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<CardProfileService>(CardProfileService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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

    expect(await service.createFee(dto)).toEqual({
      id: 'fee123',
      ...dto,
    });

    expect(prisma.fee.create).toHaveBeenCalledWith({ data: dto });
  });

  it('should return all fees', async () => {
    expect(await service.getFees()).toEqual([
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
    expect(prisma.fee.findMany).toHaveBeenCalled();
  });
});
