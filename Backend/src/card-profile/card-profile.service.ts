import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFeeDto } from './dto/create-fee.dto';
import { CreateCardProfileDto } from './dto/create-card-profile.dto';
import { Fee, CardProfile } from '@prisma/client';
import { PrismaService } from '../utils/prisma';
import { UpdateCardProfileDto } from './dto/update-card-profile.dto';

@Injectable()
export class CardProfileService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new fee
  public async createFee(dto: CreateFeeDto): Promise<Fee> {
    const fee = await this.prisma.fee.findFirst({
      where: { name: dto.name },
    });

    if (fee) {
      throw new HttpException('Fee Name already exists', HttpStatus.CONFLICT);
    }

    try {
      return this.prisma.fee.create({
        data: dto,
      });
    } catch (error) {
      throw error;
    }
  }

  // Retrieve all fees
  async getFees(): Promise<Fee[]> {
    try {
      return this.prisma.fee.findMany();
    } catch (error) {
      throw error;
    }
  }

  // find By Card Name
  private async findByCardName(cardName: string): Promise<CardProfile | null> {
    try {
      const cardProfile = await this.prisma.cardProfile.findFirst({
        where: { cardName },
      });

      return cardProfile;
    } catch (error) {
      throw error;
    }
  }

  // find By Card ID
  private async findByCardID(id: string): Promise<CardProfile | null> {
    try {
      const cardProfile = await this.prisma.cardProfile.findUnique({
        where: { id },
      });

      return cardProfile;
    } catch (error) {
      throw error;
    }
  }

  // Create a new card profile and link selected fees.
  public async create(dto: CreateCardProfileDto): Promise<CardProfile> {
    try {
      const existingCard = await this.findByCardName(dto.cardName);

      if (existingCard) {
        throw new HttpException(
          'Card Name already exists',
          HttpStatus.CONFLICT,
        );
      }

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
          // Fetch existing fees from DB
          const existingFees = await tx.fee.findMany({
            where: { id: { in: dto.feeIds } },
            select: { id: true },
          });

          const existingFeeIds = existingFees.map((fee) => fee.id);
          const invalidFeeIds = dto.feeIds.filter(
            (id) => !existingFeeIds.includes(id),
          );

          if (invalidFeeIds.length) {
            throw new HttpException(
              `Invalid fee IDs: ${invalidFeeIds.join(', ')}`,
              HttpStatus.BAD_REQUEST,
            );
          }

          // Update the fees with the new cardProfileId
          await tx.fee.updateMany({
            where: { id: { in: existingFeeIds } },
            data: { cardProfileId: cardProfile.id },
          });
        }

        return cardProfile;
      });
    } catch (error) {
      throw error;
    }
  }

  // Retrieve all profiles
  public async getProfiles(): Promise<CardProfile[]> {
    try {
      return this.prisma.cardProfile.findMany();
    } catch (error) {
      throw error;
    }
  }

  // update card profile
  public async update(
    id: string,
    data: UpdateCardProfileDto,
  ): Promise<CardProfile> {
    const cardProfile = await this.findByCardID(id);

    if (!cardProfile) {
      throw new HttpException('Card profile not found', HttpStatus.NOT_FOUND);
    }

    return this.prisma.cardProfile.update({
      where: { id: cardProfile.id },
      data,
    });
  }

  // Delete card profile
  public async delete(id: string): Promise<{ message: string }> {
    try {
      const cardProfile = await this.findByCardID(id);

      if (!cardProfile) {
        throw new HttpException('Card profile not found', HttpStatus.NOT_FOUND);
      }

      await this.prisma.cardProfile.delete({
        where: { id: cardProfile.id },
      });

      return { message: 'Card profile deleted successfully' };
    } catch (error) {
      throw error;
    }
  }
}
