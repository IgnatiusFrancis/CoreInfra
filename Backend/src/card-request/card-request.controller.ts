import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CardRequestService } from './card-request.service';
import { CreateCardRequestDto } from './dto/create-card-request.dto';
import { CardRequest } from '@prisma/client';
import { UpdateCardRequestStatusDto } from './dto/update-card-request.dto';

@ApiTags('Card Requests')
@Controller('card-requests')
export class CardRequestController {
  constructor(private readonly cardRequestService: CardRequestService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new card request' })
  @ApiResponse({
    status: 201,
    description: 'Card request created successfully',
  })
  create(@Body() dto: CreateCardRequestDto): Promise<CardRequest> {
    return this.cardRequestService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all card requests' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of all card requests',
  })
  findAll(): Promise<CardRequest[]> {
    return this.cardRequestService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific card request by ID' })
  @ApiResponse({ status: 200, description: 'Returns a specific card request' })
  @ApiResponse({ status: 404, description: 'Card request not found' })
  findOne(@Param('id') id: string): Promise<CardRequest> {
    return this.cardRequestService.findOne(id);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update the status of a card request' })
  @ApiResponse({ status: 200, description: 'Status updated successfully' })
  @ApiResponse({ status: 404, description: 'Card request not found' })
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateCardRequestStatusDto,
  ): Promise<CardRequest> {
    return this.cardRequestService.updateStatus(id, dto.status);
  }
}
