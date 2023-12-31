import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/sequalize';

export class Visitor extends Model {
  public id!: number;
  public name!: string;
  public phone!: string;
  public email!: string;
  public subscriptionType!: string;
}

Visitor.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  phone: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  subscriptionType: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
}, {
  tableName: 'Visitors',
  sequelize,
});
