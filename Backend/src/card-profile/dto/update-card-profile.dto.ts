// import { PartialType } from '@nestjs/swagger';
// import { CreateCardProfileDto } from './create-card-profile.dto';

// export class UpdateCardProfileDto extends PartialType(CreateCardProfileDto) {}

import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateCardProfileDto } from './create-card-profile.dto';

export class UpdateCardProfileDto extends PartialType(
  OmitType(CreateCardProfileDto, ['feeIds'] as const),
) {}
