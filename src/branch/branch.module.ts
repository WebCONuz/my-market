import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Market } from 'src/market/market.model';
import { BranchController } from './branch.controller';
import { Branch } from './branch.model';
import { BranchService } from './branch.service';

@Module({
  imports: [SequelizeModule.forFeature([Branch, Market])],
  controllers: [BranchController],
  providers: [BranchService],
})
export class BranchModule {}
