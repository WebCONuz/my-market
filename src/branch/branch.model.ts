import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Market } from 'src/market/market.model';

interface BranchesCreateAttr {
  name: string;
  addres: string;
  market_id: number;
}

@Table({ tableName: 'branches' })
export class Branch extends Model<Branch, BranchesCreateAttr> {
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
  addres: string;

  @ForeignKey(() => Market)
  @Column({ type: DataType.INTEGER })
  market_id: number;
}
