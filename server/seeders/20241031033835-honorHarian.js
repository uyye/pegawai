'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("honorHarians",[
    {
      golongan:1,
      honor:50.000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      golongan:2,
      honor:65.000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      golongan:3,
      honor:85.000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      golongan:4,
      honor:100.000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('honorHarians', null, {});
  }
};
