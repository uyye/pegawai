'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pegawais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nip: {
        type: Sequelize.INTEGER,
        unique:true
      },
      namaPegawai: {
        type: Sequelize.STRING
      },
      tempatLahir: {
        type: Sequelize.STRING
      },
      tanggalLahir: {
        type: Sequelize.DATE
      },
      golongan: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'honorHarians', 
          key: 'golongan'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fotoPegawai: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pegawais');
  }
};