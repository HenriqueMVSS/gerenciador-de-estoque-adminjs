
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/Sequelize';

interface IStock{
    id: number;
    quantity: number;
    productId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Stock extends Model<IStock> implements IStock{
    public id!: number;
    public quantity!: number;
    public productId !: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Stock.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'products',
              key: 'id'
          }
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
        modelName: 'stock',
        tableName: 'stocks',
    },

)