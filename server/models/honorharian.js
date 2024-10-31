'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class honorHarian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      honorHarian.hasMany(models.pegawai, {
        foreignKey: 'golongan',
        sourceKey: 'golongan',
        as: 'pegawais'
      });
    }
  }
  honorHarian.init({
    golongan: DataTypes.INTEGER,
    honor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'honorHarian',
  });
  return honorHarian;
};