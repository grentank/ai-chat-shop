'use strict';

const { Product, Order } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Order.bulkCreate([
      {
        fullname: 'Иван Иванов',
        address: 'ул. Ленина, д. 10, Москва',
        phone: '+7-495-123-45-67',
        cost: 150.0,
      },
      {
        fullname: 'Мария Петрова',
        address: 'пр. Мира, д. 25, Санкт-Петербург',
        phone: '+7-812-765-43-21',
        cost: 75.0,
      },
      {
        fullname: 'Алексей Смирнов',
        address: 'ул. Лермонтова, д. 5, Казань',
        phone: '+7-843-987-65-43',
        cost: 180.0,
      },
    ]);
    const data = [
      {
        name: 'Purple Socks for Men and Women',
        price: 9.99,
        description:
          "Classic Created Elbrus Engagement Solitaire Diamond Socks for Men and Women. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        image: '/img/socks.jpg',
      },
      {
        name: 'White Gold Plated Princess',
        price: 9.99,
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        image: '/img/ring.jpg',
      },
      {
        name: 'Solid Gold Petite Micropave ',
        price: 168,
        description:
          'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        image: '/img/Micropave.jpg',
      },
      {
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        image: '/img/womenDr.jpg',
      },
      {
        name: 'Mens Casual Slim Fit',
        price: 15.99,
        description:
          'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        image: '/img/menTs.jpg',
      },
      {
        name: 'DANVOUY Womens T Shirt Casual Cotton Short',
        price: 12.99,
        description:
          '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
        image: '/img/jacket.jpg',
      },
      {
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        image: '/img/Backpack.jpg',
      },
    ];
    await Product.bulkCreate(data);
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
