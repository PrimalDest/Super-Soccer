'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    get birthDay() {
      const birthDate = this.getDataValue('birthDate');
      const day = ("0" + birthDate.getDate()).slice(-2);
      const month = ("0" + (birthDate.getMonth() + 1)).slice(-2);
      const year = birthDate.getFullYear();

      return day + '/' + month + '/' + year;
    }

    static associate(models) {
      // define association here
      Profile.hasOne(models.User)
    }
  }
  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Name is required`
        },

        notEmpty: {
          msg : `Name is required`
        }
      }
    },
    birthDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Birth Date is required`
        },

        notEmpty: {
          msg : `Birth Date is required`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};