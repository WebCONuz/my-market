import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMarketDto } from './dto/create-market.dto';
import { Market } from './market.model';

@Injectable()
export class MarketService {
  constructor(@InjectModel(Market) private marketReopsitory: typeof Market) {}

  async create(createMarketDto: CreateMarketDto) {
    return await this.marketReopsitory.create(createMarketDto);
  }
}
