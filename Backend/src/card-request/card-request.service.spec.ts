import { Test, TestingModule } from '@nestjs/testing';
import { CardRequestService } from './card-request.service';
import { PrismaService } from '../utils/prisma';
import { CreateCardRequestDto } from './dto/create-card-request.dto';
import { RequestStatus } from '@prisma/client';

describe('CardRequestService', () => {
  let service: CardRequestService;
  let prisma: PrismaService;

  const mockPrisma = {
    cardRequest: {
      create: jest.fn().mockImplementation((data) => ({
        id: 'req123',
        ...data.data,
        status: RequestStatus.PENDING,
      })),
      findMany: jest.fn().mockResolvedValue([
        {
          id: 'req123',
          batch: 'BATCH-001',
          branchName: 'Main Branch',
          cardCharges: 300,
          cardType: 'Debit Card',
          initiator: 'John Doe',
          quantity: 100,
          status: RequestStatus.PENDING,
        },
      ]),
      findUnique: jest.fn().mockImplementation(({ where }) => {
        if (where.id === 'req123' || where.batch === 'BATCH-001') {
          return {
            id: 'req123',
            batch: 'BATCH-001',
            branchName: 'Main Branch',
            cardCharges: 300,
            cardType: 'Debit Card',
            initiator: 'John Doe',
            quantity: 100,
            status: RequestStatus.PENDING,
          };
        }
        return null;
      }),
      update: jest.fn().mockImplementation(({ where, data }) => ({
        id: where.id,
        batch: 'BATCH-001',
        branchName: 'Main Branch',
        cardCharges: 300,
        cardType: 'Debit Card',
        initiator: 'John Doe',
        quantity: 100,
        status: data.status,
      })),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardRequestService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<CardRequestService>(CardRequestService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a card request', async () => {
    const dto: CreateCardRequestDto = {
      branchName: 'Main Branch',
      cardType: 'Debit Card',
      quantity: 100,
      initiator: 'John Doe',
      cardCharges: 300,
      batch: 'BATCH-002',
    };

    expect(await service.create(dto)).toEqual({
      id: 'req123',
      batch: 'BATCH-002',
      branchName: 'Main Branch',
      cardCharges: 300,
      cardType: 'Debit Card',
      initiator: 'John Doe',
      quantity: 100,
      status: RequestStatus.PENDING,
    });

    expect(prisma.cardRequest.create).toHaveBeenCalledWith({ data: dto });
  });

  it('should return all card requests', async () => {
    expect(await service.findAll()).toEqual([
      {
        id: 'req123',
        batch: 'BATCH-001',
        branchName: 'Main Branch',
        cardCharges: 300,
        cardType: 'Debit Card',
        initiator: 'John Doe',
        quantity: 100,
        status: RequestStatus.PENDING,
      },
    ]);
    expect(prisma.cardRequest.findMany).toHaveBeenCalled();
  });

  it('should return a specific card request by ID', async () => {
    expect(await service.findOne('req123')).toEqual({
      id: 'req123',
      batch: 'BATCH-001',
      branchName: 'Main Branch',
      cardCharges: 300,
      cardType: 'Debit Card',
      initiator: 'John Doe',
      quantity: 100,
      status: RequestStatus.PENDING,
    });
    expect(prisma.cardRequest.findUnique).toHaveBeenCalledWith({
      where: { id: 'req123' },
    });
  });

  it('should throw an error when finding a non-existent request', async () => {
    await expect(service.findOne('unknown')).rejects.toThrow(
      'Request not found',
    );
  });

  it('should update the status of a card request', async () => {
    expect(await service.updateStatus('req123', RequestStatus.READY)).toEqual({
      id: 'req123',
      batch: 'BATCH-001',
      branchName: 'Main Branch',
      cardCharges: 300,
      cardType: 'Debit Card',
      initiator: 'John Doe',
      quantity: 100,
      status: RequestStatus.READY,
    });

    expect(prisma.cardRequest.update).toHaveBeenCalledWith({
      where: { id: 'req123' },
      data: { status: RequestStatus.READY },
    });
  });
});
