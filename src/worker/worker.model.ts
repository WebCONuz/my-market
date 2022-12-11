import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Branch } from 'src/branch/branch.model';

interface WorkerCreateAttr {
  name: string;
  phone: number;
  branch_id: number;
}

@Table({ tableName: 'workers' })
export class Worker extends Model<Worker, WorkerCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ForeignKey(() => Branch)
  @Column({ type: DataType.INTEGER })
  branch_id: number;
}
