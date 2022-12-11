import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Branch } from 'src/branch/branch.model';
import { ProductController } from './product.controller';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Module({
  imports: [SequelizeModule.forFeature([Product, Branch])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
