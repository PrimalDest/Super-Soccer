'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BolaBio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BolaBio.init({
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    nationality: DataTypes.STRING,
    club: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    PositionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BolaBio',
  });
  return BolaBio;
};