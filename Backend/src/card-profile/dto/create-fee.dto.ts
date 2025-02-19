import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateFeeDto {
  @ApiProperty({ example: 'Annual Fee', description: 'Name of the fee' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 10.99, description: 'Fee value' })
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @ApiProperty({ example: 'USD', description: 'Fee currency' })
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty({ example: 'YEARLY', description: 'Fee charge frequency' })
  @IsString()
  @IsNotEmpty()
  frequency: string;

  @ApiProperty({ example: 'Reduces balance', required: false })
  @IsString()
  feeImpact?: string;

  @ApiProperty({ example: '1234567890', description: 'Associated account PAD' })
  @IsString()
  @IsNotEmpty()
  accountPad: string;

  @ApiProperty({
    example: 'SAVINGS',
    required: false,
    description: 'Linked account type',
  })
  @IsString()
  account?: string;
}
