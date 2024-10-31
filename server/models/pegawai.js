'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pegawai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pegawai.belongsTo(models.honorHarian, {
        foreignKey: 'golongan',
        targetKey: 'golongan',
        as: 'honorHarian'
      });
      pegawai.hasMany(models.jumlahMasukKerja, {
        foreignKey: 'nip',
        as: 'jumlahMasukKerja' 
      });
    }
  }
  pegawai.init({
    nip: DataTypes.INTEGER,
    namaPegawai: DataTypes.STRING,
    tempatLahir: DataTypes.STRING,
    tanggalLahir: DataTypes.DATE,
    golongan: DataTypes.INTEGER,
    fotoPegawai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pegawai',
  });
  return pegawai;
};