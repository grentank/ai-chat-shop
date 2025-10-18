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
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      body: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments',
    },
  );
  return Comment;
};
