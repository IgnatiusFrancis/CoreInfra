import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCardRequestDto } from './dto/create-card-request.dto';
import { PrismaService } from 'src/utils';
import { CardRequest, RequestStatus } from '@prisma/client';

@Injectable()
export class CardRequestService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCardRequestDto): Promise<CardRequest> {
    const existingBatch = await this.prisma.cardRequest.findUnique({
      where: { batch: data.batch },
    });

    if (existingBatch) {
      throw new HttpException(
        'Batch number already exists',
        HttpStatus.CONFLICT,
      );
    }
    return this.prisma.cardRequest.create({ data });
  }

  async findAll(): Promise<CardRequest[]> {
    try {
      return this.prisma.cardRequest.findMany();
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string): Promise<CardRequest> {
    const cardRequest = await this.prisma.cardRequest.findUnique({
      where: { id },
    });

    if (!cardRequest) {
      throw new HttpException('Request not found', HttpStatus.NOT_FOUND);
    }

    return cardRequest;
  }

  async updateStatus(id: string, status: RequestStatus): Promise<CardRequest> {
    const cardRequest = await this.findOne(id);
    return this.prisma.cardRequest.update({
      where: { id: cardRequest.id },
      data: { status },
    });
  }
}
