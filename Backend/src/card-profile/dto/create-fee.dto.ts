import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';
import { Currency, FeeFrequency, FeeImpact, AccountPad } from '@prisma/client';

export class CreateFeeDto {
  @ApiProperty({ example: 'Annual Fee', description: 'Name of the fee' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 10.99, description: 'Fee value' })
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @ApiProperty({ example: 'USD', description: 'Fee currency', enum: Currency })
  @IsEnum(Currency)
  @IsNotEmpty()
  currency: Currency;

  @ApiProperty({
    example: 'MONTHLY',
    description: 'Fee charge frequency',
    enum: FeeFrequency,
  })
  @IsEnum(FeeFrequency)
  @IsNotEmpty()
  frequency: FeeFrequency;

  @ApiProperty({
    example: 'PIN_REISSUE',
    description: 'Impact of the fee',
    enum: FeeImpact,
    required: false,
  })
  @IsEnum(FeeImpact)
  feeImpact?: FeeImpact;

  @ApiProperty({
    example: 'NONE',
    description: 'Account padding type',
    enum: AccountPad,
  })
  @IsEnum(AccountPad)
  @IsNotEmpty()
  accountPad: AccountPad;

  @ApiProperty({
    example: '1234567890',
    description: 'Associated account ID',
  })
  @IsString()
  @IsNotEmpty()
  account: string;
}
