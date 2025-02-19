// import { ApiProperty } from '@nestjs/swagger';
// import { IsNotEmpty, IsString, IsInt } from 'class-validator';

// export class CreateCardProfileDto {
//   @ApiProperty({
//     example: 'Gold Card',
//     description: 'Name of the card profile',
//   })
//   @IsString()
//   @IsNotEmpty()
//   cardName: string;

//   @ApiProperty({
//     example: 'VISA',
//     description: 'Card scheme (VISA, MasterCard, etc.)',
//   })
//   @IsString()
//   @IsNotEmpty()
//   cardScheme: string;

//   @ApiProperty({
//     example: 'Premium gold card with added benefits',
//     required: false,
//   })
//   @IsString()
//   description?: string;

//   @ApiProperty({
//     example: 'Branch1,Branch2',
//     required: false,
//     description: 'Blacklist branches',
//   })
//   @IsString()
//   branchBlacklist?: string;

//   @ApiProperty({
//     example: '123456',
//     description: 'Bank Identification Number (BIN) prefix',
//   })
//   @IsString()
//   @IsNotEmpty()
//   binPrefix: string;

//   @ApiProperty({ example: 5, description: 'Card expiration period in years' })
//   @IsInt()
//   @IsNotEmpty()
//   expiration: number;

//   @ApiProperty({ example: 'USD', description: 'Currency for the card profile' })
//   @IsString()
//   @IsNotEmpty()
//   currency: string;
// }

import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsArray,
  IsOptional,
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
  @IsString()
  @IsNotEmpty()
  cardScheme: string;

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

  @ApiProperty({ example: 'USD', description: 'Currency' })
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty({
    example: ['fee-id-1', 'fee-id-2'],
    required: false,
    description: 'Array of fee IDs to link to the card profile',
  })
  @IsArray()
  @IsOptional()
  feeIds?: string[];
}
