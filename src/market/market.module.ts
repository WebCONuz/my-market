import { Module } from '@nestjs/common';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Market } from './market.model';
import { Branch } from 'src/branch/branch.model';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Market, Branch]),
    JwtModule,
    AuthModule,
  ],
  controllers: [MarketController],
  providers: [MarketService],
})
export class MarketModule {}
