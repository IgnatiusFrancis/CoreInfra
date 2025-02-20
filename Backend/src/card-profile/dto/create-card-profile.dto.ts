import { ApiProperty } from '@nestjs/swagger';
import { CardScheme, Currency } from '@prisma/client';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsArray,
  IsOptional,
  IsEnum,
} from 'class-validator';

export class CreateCardProfileDto {
  @ApiProperty({
    example: 'Gold Card',
    description: 'Name of the card profile',
  })
  @IsString()
  @IsNotEmpty()
  cardName: string;

  @ApiProperty({ example: 'VISA', description: 'Card scheme' })
  @IsEnum(CardScheme)
  @IsNotEmpty()
  cardScheme: CardScheme;

  @ApiProperty({ example: 'Premium gold card with benefits', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 'Branch1,Branch2', required: false })
  @IsString()
  @IsOptional()
  branchBlacklist?: string;

  @ApiProperty({ example: '123456', description: 'BIN Prefix' })
  @IsString()
  @IsNotEmpty()
  binPrefix: string;

  @ApiProperty({ example: 5, description: 'Card expiration period (years)' })
  @IsInt()
  @IsNotEmpty()
  expiration: number;

  @ApiProperty({ example: 'USD', description: 'Fee currency', enum: Currency })
  @IsEnum(Currency)
  @IsNotEmpty()
  currency: Currency;

  @ApiProperty({
    example: ['fee-id-1', 'fee-id-2'],
    required: false,
    description: 'Array of fee IDs to link to the card profile',
  })
  @IsArray()
  @IsOptional()
  feeIds?: string[];
}
