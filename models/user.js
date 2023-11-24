'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Like)
      User.belongsTo(models.Profile)
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Email is required`
        },

        notEmpty: {
          msg : `Email is required`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Password is required`
        },

        notEmpty: {
          msg : `Password is required`
        },
        isStrongPassword(value) {
          const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
          if (!strongPasswordRegex.test(value)) {
            throw new Error('Password must have at least 8 characters, at least 1 uppercase letter, at least 1 lowercase letter, and at least 1 number');
          }
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};