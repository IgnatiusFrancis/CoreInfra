import { Injectable } from '@nestjs/common';
import { CreateFeeDto } from './dto/create-fee.dto';
import { CreateCardProfileDto } from './dto/create-card-profile.dto';
import { Fee, CardProfile } from '@prisma/client';
import { PrismaService } from 'src/utils';

@Injectable()
export class CardProfileService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new fee
  async createFee(dto: CreateFeeDto): Promise<Fee> {
    return this.prisma.fee.create({
      data: dto,
    });
  }

  // Retrieve all fees
  async getFees(): Promise<Fee[]> {
    return this.prisma.fee.findMany();
  }

  // Create a new card profile and link selected fees
  async create(dto: CreateCardProfileDto): Promise<CardProfile> {
    return this.prisma.$transaction(async (tx) => {
      // Create the card profile
      const cardProfile = await tx.cardProfile.create({
        data: {
          cardName: dto.cardName,
          cardScheme: dto.cardScheme,
          description: dto.description,
          branchBlacklist: dto.branchBlacklist,
          binPrefix: dto.binPrefix,
          expiration: dto.expiration,
          currency: dto.currency,
        },
      });

      // Link fees if any are provided
      if (dto.feeIds?.length) {
        await tx.fee.updateMany({
          where: { id: { in: dto.feeIds } },
          data: { cardProfileId: cardProfile.id },
        });
      }

      return cardProfile;
    });
  }
}
