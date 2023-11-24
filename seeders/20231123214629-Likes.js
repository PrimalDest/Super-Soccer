'use strict';
const fs = require('fs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let Likes = fs.readFileSync('./data/Likes.json')
    Likes = JSON.parse(Likes)
    Likes = Likes.map(bolaBio => {
      delete bolaBio.id
      bolaBio.createdAt = new Date();
      bolaBio.updatedAt = new Date();
      return bolaBio;
    });
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Likes', Likes)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Likes', null, {})
  }
};
