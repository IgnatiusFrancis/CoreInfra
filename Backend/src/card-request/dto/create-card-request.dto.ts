import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsNumber } from 'class-validator';

export class CreateCardRequestDto {
  @ApiProperty({ example: 'Main Branch', description: 'Name of the branch' })
  @IsString()
  @IsNotEmpty()
  branchName: string;

  @ApiProperty({ example: 'Debit Card', description: 'Type of card requested' })
  @IsString()
  @IsNotEmpty()
  cardType: string;

  @ApiProperty({ example: 100, description: 'Number of cards requested' })
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({
    example: 'John Doe',
    description: 'Person who initiated request',
  })
  @IsString()
  @IsNotEmpty()
  initiator: string;

  @ApiProperty({
    example: 5000.5,
    description: 'Total charge for requested cards',
  })
  @IsNumber()
  @IsNotEmpty()
  cardCharges: number;

  @ApiProperty({
    example: 'BATCH-001',
    description: 'Batch number for the request',
  })
  @IsString()
  @IsNotEmpty()
  batch: string;
}
