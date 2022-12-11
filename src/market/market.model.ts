import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Branch } from 'src/branch/branch.model';

interface MarketCreationAttrs {
  name: string;
}

// Table name
@Table({ tableName: 'markets' })
export class Market extends Model<Market, MarketCreationAttrs> {
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

  @HasMany(() => Branch)
  branges: Branch[];
}
