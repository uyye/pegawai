'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jumlahMasukKerja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      jumlahMasukKerja.belongsTo(models.pegawai, {
        foreignKey: 'nip',
        targetKey: 'nip', 
        as: 'pegawai' 
      });
    }
  }
  jumlahMasukKerja.init({
    nip: DataTypes.INTEGER,
    jumlahHari: DataTypes.INTEGER,
    periodeBulan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'jumlahMasukKerja',
  });
  return jumlahMasukKerja;
};