import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { RequestStatus } from '@prisma/client';

export class UpdateCardRequestStatusDto {
  @ApiProperty({
    enum: RequestStatus,
    example:
      'Either of => |IN_PROGRESS | DISPATCH | READY | ACKNOWLEDGED | PENDING',
    description: 'Select a status from the available options',
  })
  @IsEnum(RequestStatus)
  status: RequestStatus;
}
