import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Worker } from './worker.model';
import { Branch } from 'src/branch/branch.model';
import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Worker, Branch]),
    AuthModule,
    JwtModule,
  ],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
