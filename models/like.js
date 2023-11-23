'use strict';
const {
  Model
} = require('sequelize');
const bolabio = require('./bolabio');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Like.belongsTo(models.BolaBio)
      Like.belongsTo(models.User)
    }
  }
  Like.init({
    userId: DataTypes.INTEGER,
    BolaBioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};