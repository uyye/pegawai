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
   await queryInterface.bulkInsert("jumlahMasukKerjas",[
    {
      nip: 2401001,
      jumlahHari: 20,
      periodeBulan: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nip: 2401002,
      jumlahHari: 22,
      periodeBulan: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nip: 2401003,
      jumlahHari: 18,
      periodeBulan: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nip: 2401004,
      jumlahHari: 25,
      periodeBulan: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nip: 2401005,
      jumlahHari: 20,
      periodeBulan: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nip: 2401006,
      jumlahHari: 15,
      periodeBulan: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nip: 2401007,
      jumlahHari: 23,
      periodeBulan: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nip: 2401008,
      jumlahHari: 30,
      periodeBulan: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nip: 2401009,
      jumlahHari: 28,
      periodeBulan: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nip: 2401010,
      jumlahHari: 20,
      periodeBulan: 1,
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
    await queryInterface.bulkDelete('jumlahMasukKerjas', null, {});
  }
};
