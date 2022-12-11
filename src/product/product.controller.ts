import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Create Product Controller
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  // Get all Product Controller
  @Get()
  getAll() {
    return this.productService.getAll();
  }

  // Get one Product Controller
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productService.getOne(+id);
  }

  // Update Product Controller
  @Put(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  // Delete Product Controller
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(+id);
  }
}
