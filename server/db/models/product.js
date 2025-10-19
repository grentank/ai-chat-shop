'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Comment }) {
      this.hasMany(Comment, { foreignKey: 'productId' });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products',
      underscored: true,
    },
  );
  return Product;
};
