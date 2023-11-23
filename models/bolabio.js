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
      BolaBio.belongsToMany(models.Like)
    }
  }
  BolaBio.init({
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    nationality: DataTypes.STRING,
    club: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    PositionId: DataTypes.INTEGER,
    shooting: DataTypes.INTEGER,
    defending: DataTypes.INTEGER,
    passing: DataTypes.INTEGER,
    dribbling: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BolaBio',
  });
  return BolaBio;
};