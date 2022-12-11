import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Branch } from './branch.model';
import { CreateBranchDto } from './dto/create-branch.dto';

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
}
