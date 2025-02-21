import {
  Controller,
  Post,
  Param,
  Body,
  Get,
  Delete,
  Patch,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CardProfileService } from './card-profile.service';
import { CreateFeeDto } from './dto/create-fee.dto';
import { CardProfile, Fee } from '@prisma/client';
import { CreateCardProfileDto } from './dto/create-card-profile.dto';
import { UpdateCardProfileDto } from './dto/update-card-profile.dto';

@ApiTags('Card Profiles')
@Controller('card-profiles')
export class CardProfileController {
  constructor(private readonly cardProfileService: CardProfileService) {}

  @Post('fee')
  @ApiOperation({ summary: 'Create a new fee' })
  @ApiResponse({ status: 201, description: 'Fee created successfully' })
  createFee(@Body() dto: CreateFeeDto): Promise<Fee> {
    return this.cardProfileService.createFee(dto);
  }

  @Get('fees')
  @ApiOperation({ summary: 'Get fees)' })
  @ApiResponse({ status: 200, description: 'List of fees' })
  getFees(): Promise<Fee[]> {
    return this.cardProfileService.getFees();
  }

  @Post('card-profiles')
  @ApiOperation({ summary: 'Create a card profile and link fees' })
  @ApiResponse({
    status: 201,
    description: 'Card profile created successfully',
  })
  createCardProfile(@Body() dto: CreateCardProfileDto): Promise<any> {
    return this.cardProfileService.create(dto);
  }

  @Get('card-profiles')
  @ApiOperation({ summary: 'Get card profile)' })
  @ApiResponse({ status: 200, description: 'List of card profiles' })
  getProfiles(): Promise<CardProfile[]> {
    return this.cardProfileService.getProfiles();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a card profile' })
  @ApiResponse({
    status: 200,
    description: 'Card profile deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Card profile not found' })
  delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.cardProfileService.delete(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Edit a card profile' })
  @ApiResponse({
    status: 200,
    description: 'Card profile updated successfully',
  })
  @ApiResponse({ status: 404, description: 'Card profile not found' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCardProfileDto,
  ): Promise<CardProfile> {
    return this.cardProfileService.update(id, dto);
  }
}
