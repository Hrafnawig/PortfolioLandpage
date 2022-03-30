'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Hotels', [
         {city: 'ForestStadt', type: 'Standard twin', price: 300, createdAt:(new Date()), updatedAt:(new Date())},
         {city: 'ForestStadt', type: 'Standard', price: 200, createdAt:(new Date()), updatedAt:(new Date())},
         {city: 'ForestStadt', type: 'Deluxe', price: 400, createdAt:(new Date()), updatedAt:(new Date())},
         {city: 'ForestStadt', type: 'Standard view', price: 300, createdAt:(new Date()), updatedAt:(new Date())},
         {city: 'DesertStan', type: 'Standard twin', price: 200, createdAt:(new Date()), updatedAt:(new Date()) },
         {city: 'DesertStan', type: 'Standard', price: 100, createdAt:(new Date()), updatedAt:(new Date())},
         {city: 'DesertStan', type: 'Deluxe', price: 300, createdAt:(new Date()), updatedAt:(new Date())},
         {city: 'DesertStan', type: 'Standard view', price: 200, createdAt:(new Date()), updatedAt:(new Date())},
         {city: 'TundraByen', type: 'Standard twin', price: 400, createdAt:(new Date()), updatedAt:(new Date()) },
         {city: 'TundraByen', type: 'Standard', price: 300, createdAt:(new Date()), updatedAt:(new Date())},
         {city: 'TundraByen', type: 'Deluxe', price: 600, createdAt:(new Date()), updatedAt:(new Date())},
         {city: 'TundraByen', type: 'Standard view', price: 500, createdAt:(new Date()), updatedAt:(new Date())},
     ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Hotels', null, {});
  }
};
