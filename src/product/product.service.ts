import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
  ) {}

  // Create Product Service
  async create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  // Get Peoducts Service
  async getAll() {
    return this.productRepository.findAll();
  }

  // Get one Peoduct Service
  async getOne(id: number) {
    return this.productRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  // Update Peoduct Service
  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(updateProductDto, {
      where: { id },
      returning: true,
    });
  }

  // Delete Peoduct Service
  async delete(id: number) {
    return this.productRepository.destroy({ where: { id } });
  }
}
