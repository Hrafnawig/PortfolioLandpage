'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hotels', [
      {
        city: 'ForestStadt',
        type: 'Standard twin',
        price: 300,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'ForestStadt',
        type: 'Standard',
        price: 200,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'ForestStadt',
        type: 'Deluxe',
        price: 400,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'ForestStadt',
        type: 'Standard view',
        price: 300,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'DesertStan',
        type: 'Standard twin',
        price: 200,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'DesertStan',
        type: 'Standard',
        price: 100,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'DesertStan',
        type: 'Deluxe',
        price: 300,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'DesertStan',
        type: 'Standard view',
        price: 200,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'TundraByen',
        type: 'Standard twin',
        price: 400,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'TundraByen',
        type: 'Standard',
        price: 300,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'TundraByen',
        type: 'Deluxe',
        price: 600,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
      {
        city: 'TundraByen',
        type: 'Standard view',
        price: 500,
        in: (new Date()),
        out: (new Date()),
        createdAt: (new Date()),
        updatedAt: (new Date())
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hotels', null, {});
  }
};