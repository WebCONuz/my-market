import {
  Controller,
  Delete,
  Body,
  Param,
  Put,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/auth.guard';
import { CreateMarketDto } from './dto/create-market.dto';
import { MarketService } from './market.service';

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  // Add Market Controller
  @UseGuards(JwtAuthGuard)
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

  // Update Market Controller
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() updateMarketDto: CreateMarketDto) {
    return this.marketService.update(+id, updateMarketDto);
  }

  // Delete Market Controller
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.marketService.delete(+id);
  }
}
