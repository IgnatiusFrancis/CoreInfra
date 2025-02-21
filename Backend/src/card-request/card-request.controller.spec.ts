// import { Test, TestingModule } from '@nestjs/testing';
// import { CardRequestController } from './card-request.controller';
// import { CardRequestService } from './card-request.service';

// describe('CardRequestController', () => {
//   let controller: CardRequestController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CardRequestController],
//       providers: [CardRequestService],
//     }).compile();

//     controller = module.get<CardRequestController>(CardRequestController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });

import { Test, TestingModule } from '@nestjs/testing';
import { CardRequestController } from './card-request.controller';
import { CardRequestService } from './card-request.service';
import { CreateCardRequestDto } from './dto/create-card-request.dto';
import { UpdateCardRequestStatusDto } from './dto/update-card-request.dto';
import { CardRequest, RequestStatus } from '@prisma/client';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('CardRequestController', () => {
  let controller: CardRequestController;
  let service: CardRequestService;

  const mockCardRequestService = {
    create: jest.fn().mockImplementation((dto: CreateCardRequestDto) => ({
      id: 'req123',
      ...dto,
      status: RequestStatus.PENDING,
    })),
    findAll: jest.fn().mockResolvedValue([
      {
        id: 'req123',
        batch: 'BATCH001',
        status: RequestStatus.PENDING,
      },
    ]),
    findOne: jest.fn().mockImplementation((id: string) =>
      id === 'req123'
        ? Promise.resolve({
            id,
            batch: 'BATCH001',
            status: RequestStatus.PENDING,
          })
        : Promise.reject(
            new HttpException('Request not found', HttpStatus.NOT_FOUND),
          ),
    ),
    updateStatus: jest
      .fn()
      .mockImplementation((id: string, status: RequestStatus) => ({
        id,
        batch: 'BATCH001',
        status,
      })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardRequestController],
      providers: [
        { provide: CardRequestService, useValue: mockCardRequestService },
      ],
    }).compile();

    controller = module.get<CardRequestController>(CardRequestController);
    service = module.get<CardRequestService>(CardRequestService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new card request', async () => {
    const dto: CreateCardRequestDto = {
      branchName: 'Main Branch',
      cardType: 'Debit Card',
      quantity: 100,
      initiator: 'John Doe',
      cardCharges: 300,
      batch: 'BATCH-001',
    };

    expect(await controller.create(dto)).toEqual({
      id: 'req123',
      ...dto,
      status: RequestStatus.PENDING,
    });

    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should return all card requests', async () => {
    expect(await controller.findAll()).toEqual([
      {
        id: 'req123',
        batch: 'BATCH001',
        status: RequestStatus.PENDING,
      },
    ]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a specific card request by ID', async () => {
    expect(await controller.findOne('req123')).toEqual({
      id: 'req123',
      batch: 'BATCH001',
      status: RequestStatus.PENDING,
    });
    expect(service.findOne).toHaveBeenCalledWith('req123');
  });

  it('should throw an error when finding a non-existent request', async () => {
    await expect(controller.findOne('unknown')).rejects.toThrow(
      'Request not found',
    );
  });

  it('should update the status of a card request', async () => {
    const dto: UpdateCardRequestStatusDto = {
      status: RequestStatus.IN_PROGRESS,
    };

    expect(await controller.updateStatus('req123', dto)).toEqual({
      id: 'req123',
      batch: 'BATCH001',
      status: RequestStatus.IN_PROGRESS,
    });

    expect(service.updateStatus).toHaveBeenCalledWith('req123', dto.status);
  });
});
