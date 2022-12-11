import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CreateMarketDto } from './dto/create-market.dto';
import { MarketService } from './market.service';

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  // Add Market Controller
  @Post()
  createMarket(@Body() createMarketDto: CreateMarketDto) {
    return this.marketService.create(createMarketDto);
  }

  // Get all markets Controller
  @Get()
  getAll() {
    return this.marketService.getAll();
  }

  // Get one market Controller
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.marketService.getOne(+id);
  }
}
