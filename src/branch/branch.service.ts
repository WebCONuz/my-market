import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Branch } from './branch.model';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update.branch.dto';

@Injectable()
export class BranchService {
  constructor(@InjectModel(Branch) private branchRepository: typeof Branch) {}

  // Create Branch Service
  async create(createBranchDto: CreateBranchDto) {
    return await this.branchRepository.create(createBranchDto);
  }

  // Get all Branch Service
  async getAll() {
    return await this.branchRepository.findAll({ include: { all: true } });
  }

  // Get one Branch by Id Service
  async getOne(id: number) {
    return await this.branchRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  // Update Branch Service
  async update(id: number, updateBranchDto: UpdateBranchDto) {
    return this.branchRepository.update(updateBranchDto, {
      where: { id },
      returning: true,
    });
  }

  // Delete Branch Service
  async delete(id: number) {
    return await this.branchRepository.destroy({ where: { id } });
  }
}
