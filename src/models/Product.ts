import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/Sequelize';

interface IProduct{
    id: number;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Product extends Model<IProduct> implements IProduct{
    public id!: number;
    public name!: string;
    public description!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        modelName: 'product',
        tableName: 'products',
    }
)