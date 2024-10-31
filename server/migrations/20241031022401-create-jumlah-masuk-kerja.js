'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jumlahMasukKerjas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nip: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pegawais',
          key: 'nip',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      },
      jumlahHari: {
        type: Sequelize.INTEGER
      },
      periodeBulan: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('jumlahMasukKerjas');
  }
};