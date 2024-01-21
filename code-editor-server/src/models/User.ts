// models/User.ts
import { Model, DataTypes, HasManyAddAssociationMixin, Association } from 'sequelize';
import sequelize from '../utils/sequelize';
import Snippet from './Snippet';

class User extends Model {
  public id!: number;
  public email!: string;
  public username!: string;
  public cognitoId!: string;
  
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public addSnippet!: HasManyAddAssociationMixin<Snippet, number>;
  public getSnippets!: HasManyAddAssociationMixin<Snippet, number>;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  cognitoId: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: true,
  },
  // Add more attributes here
}, {
  sequelize,
  modelName: 'User',
  timestamps: true,
});

export default User;
