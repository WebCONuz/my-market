import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { WorkerService } from './worker.service';

@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  // Create Worker Controller
  @Post()
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workerService.create(createWorkerDto);
  }

  // Get all Worker Controller
  @Get()
  getAll() {
    return this.workerService.getAll();
  }

  // Get one Worker Controller
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.workerService.getOne(+id);
  }

  // Update Worker Controller
  @Put(':id')
  update(@Param('id') id: number, @Body() updateWorkerDto: UpdateWorkerDto) {
    return this.workerService.update(+id, updateWorkerDto);
  }

  // Delete Worker Controller
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.workerService.delete(+id);
  }
}
