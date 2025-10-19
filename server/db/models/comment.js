'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Product }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  Comment.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
      },
      productId: {
        type: DataTypes.INTEGER,
        field: 'product_id',
      },
      body: DataTypes.TEXT,
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
      modelName: 'Comment',
      tableName: 'comments',
      underscored: true,
    },
  );
  return Comment;
};
