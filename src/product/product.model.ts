import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Branch } from 'src/branch/branch.model';

interface ProductCreateAttr {
  title: string;
  price: number;
  branch_id: number;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreateAttr> {
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
  title: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => Branch)
  @Column({ type: DataType.INTEGER })
  branch_id: number;
}
