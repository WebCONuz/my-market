import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Market } from 'src/market/market.model';
import { BranchController } from './branch.controller';
import { Branch } from './branch.model';
import { BranchService } from './branch.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Branch, Market]),
    JwtModule,
    AuthModule,
  ],
  controllers: [BranchController],
  providers: [BranchService],
})
export class BranchModule {}
