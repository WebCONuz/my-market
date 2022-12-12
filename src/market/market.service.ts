import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Branch } from 'src/branch/branch.model';
import { CreateMarketDto } from './dto/create-market.dto';
import { Market } from './market.model';

@Injectable()
export class MarketService {
  constructor(
    @InjectModel(Market) private marketReopsitory: typeof Market,
    @InjectModel(Branch) private branchRepository: typeof Branch,
  ) {}

  // Create Market Service
  async create(createMarketDto: CreateMarketDto) {
    return await this.marketReopsitory.create(createMarketDto);
  }

  // Get all markets Service
  async getAll() {
    return await this.marketReopsitory.findAll({ include: { all: true } });
  }

  // Get one market Service
  async getOne(id: number) {
    const market = await this.marketReopsitory.findOne({ where: { id } });
    const branches = await this.branchRepository.findAll({
      where: { market_id: market.id },
      include: { all: true },
    });

    let obj: Record<string, any> = { ...market, branches: [...branches] };
    return { ...obj.dataValues, branches: [...obj.branches] };
  }

  // Update Market Service
  async update(id: number, updateMarketDto: CreateMarketDto) {
    return await this.marketReopsitory.update(updateMarketDto, {
      where: { id },
      returning: true,
    });
  }

  // Delete Market Service
  async delete(id: number) {
    return await this.marketReopsitory.destroy({
      where: { id },
    });
  }
}
