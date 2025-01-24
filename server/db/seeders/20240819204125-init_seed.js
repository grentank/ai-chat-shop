'use strict';

const products = require('../seedData/products.json');
const orders = require('../seedData/orders.json');
const users = require('../seedData/users.json');
const { Product, Order, Comment, User } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Order.bulkCreate(orders);
    await Product.bulkCreate(products);
    await User.bulkCreate(users);
    await Comment.bulkCreate()
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
