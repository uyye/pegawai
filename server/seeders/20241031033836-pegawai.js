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

    await queryInterface.bulkInsert("pegawais",[
      {
        nip: 2401001,
        namaPegawai: 'Adinda Berjaya',
        tempatLahir: 'Jayapura',
        tanggalLahir: new Date('1990-01-01'),
        golongan: 3,
        fotoPegawai: 'http://jpg1.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: 2401002,
        namaPegawai: 'Budi Santoso',
        tempatLahir: 'Surabaya',
        tanggalLahir: new Date('1989-05-12'),
        golongan: 2,
        fotoPegawai: 'http://jpg2.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: 2401003,
        namaPegawai: 'Cynthia Aulia',
        tempatLahir: 'Jakarta',
        tanggalLahir: new Date('1992-03-15'),
        golongan: 4,
        fotoPegawai: 'http://jpg3.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: 2401004,
        namaPegawai: 'Dewi Lestari',
        tempatLahir: 'Bandung',
        tanggalLahir: new Date('1991-08-21'),
        golongan: 1,
        fotoPegawai: 'http://jpg4.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: 2401005,
        namaPegawai: 'Eko Prasetyo',
        tempatLahir: 'Yogyakarta',
        tanggalLahir: new Date('1988-07-10'),
        golongan: 3,
        fotoPegawai: 'http://jpg5.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: 2401006,
        namaPegawai: 'Fahri Setiawan',
        tempatLahir: 'Medan',
        tanggalLahir: new Date('1993-09-22'),
        golongan: 2,
        fotoPegawai: 'http://jpg6.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: 2401007,
        namaPegawai: 'Gina Rahmawati',
        tempatLahir: 'Makassar',
        tanggalLahir: new Date('1990-02-28'),
        golongan: 4,
        fotoPegawai: 'http://jpg7.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: 2401008,
        namaPegawai: 'Hendra Saputra',
        tempatLahir: 'Palembang',
        tanggalLahir: new Date('1987-12-12'),
        golongan: 1,
        fotoPegawai: 'http://jpg8.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: 2401009,
        namaPegawai: 'Ika Nursari',
        tempatLahir: 'Semarang',
        tanggalLahir: new Date('1995-11-05'),
        golongan: 3,
        fotoPegawai: 'http://jpg9.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nip: 2401010,
        namaPegawai: 'Joko Widodo',
        tempatLahir: 'Surakarta',
        tanggalLahir: new Date('1985-10-01'),
        golongan: 2,
        fotoPegawai: 'http://jpg10.com',
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
     await queryInterface.bulkDelete('pegawais', null, {});
  }
};
