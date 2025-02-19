import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { RequestStatus } from '@prisma/client';

export class UpdateCardRequestStatusDto {
  @ApiProperty({ enum: RequestStatus, example: 'IN_PROGRESS' })
  @IsEnum(RequestStatus)
  status: RequestStatus;
}
