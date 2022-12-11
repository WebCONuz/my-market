import { Body, Controller, Post } from '@nestjs/common';
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
}
