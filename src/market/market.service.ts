import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMarketDto } from './dto/create-market.dto';
import { Market } from './market.model';

@Injectable()
export class MarketService {
  constructor(@InjectModel(Market) private marketReopsitory: typeof Market) {}

  // Create Market Service
  async create(createMarketDto: CreateMarketDto) {
    return await this.marketReopsitory.create(createMarketDto);
  }
  // Get all markets Service
  async getAll() {
    return await this.marketReopsitory.findAll();
  }

  // Get one market Service
  async getOne(id: number) {
    return await this.marketReopsitory.findOne({ where: { id } });
  }
}
