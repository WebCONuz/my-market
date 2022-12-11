import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Worker } from './worker.model';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';

@Injectable()
export class WorkerService {
  constructor(@InjectModel(Worker) private workerRepository: typeof Worker) {}

  // Create Worker Service
  async create(createWorkerDto: CreateWorkerDto) {
    return this.workerRepository.create(createWorkerDto);
  }

  // Get Worker Service
  async getAll() {
    return this.workerRepository.findAll();
  }

  // Get one Worker Service
  async getOne(id: number) {
    return this.workerRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  // Update Worker Service
  async update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.workerRepository.update(updateWorkerDto, {
      where: { id },
      returning: true,
    });
  }

  // Delete Worker Service
  async delete(id: number) {
    return this.workerRepository.destroy({ where: { id } });
  }
}
