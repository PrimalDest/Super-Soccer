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
    get birthDay() {
      const birthDate = this.getDataValue('birthDate');
      const day = ("0" + birthDate.getDate()).slice(-2);
      const month = ("0" + (birthDate.getMonth() + 1)).slice(-2);
      const year = birthDate.getFullYear();

      return day + '/' + month + '/' + year;
    }

    static async sortByName() {
      return await this.findAll({
        order: [['name', 'ASC']]
      });
    }

    static associate(models) {
      // define association here
      BolaBio.hasMany(models.Like)
      BolaBio.belongsTo(models.Position)
      BolaBio.belongsTo(models.Position);
      
    }
  }
  BolaBio.init({
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
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Birth Date is required`
        },

        notEmpty: {
          msg : `Birth Date is required`
        }
      }
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Nationality is required`
        },

        notEmpty: {
          msg : `Nationality is required`
        }
      }
    },
    club:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Club is required`
        },

        notEmpty: {
          msg : `Club is required`
        }
      }
    },
    shortDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Description is required`
        },

        notEmpty: {
          msg : `Description is required`
        }
      }
    },
    PositionId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Position is required`
        },

        notEmpty: {
          msg : `Position is required`
        }
      }
    },
    shooting: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Shooting is required`
        },

        notEmpty: {
          msg : `Shooting is required`
        }
      }
    },
    defending: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Defending stats is required`
        },

        notEmpty: {
          msg : `Defending stats is required`
        }
      }
    },
    passing: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Passing stats is required`
        },

        notEmpty: {
          msg : `Passing stats is required`
        }
      }
    },
    dribbling: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg : `Dribling stats is required`
        },

        notEmpty: {
          msg : `Dribling stats is required`
        }
      }
    },
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BolaBio',
    hooks: {
      beforeCreate: (bolaBio, options) => {
        if (!bolaBio.imageUrl) {
          bolaBio.imageUrl = 'https://cdn.discordapp.com/attachments/369756016772120578/1177333825387384902/3058ec0e-ff82-45b5-8fd1-559e95d6bacb.png?ex=65722091&is=655fab91&hm=4832c15643275179d0451237fca2df28df81bbf0c203df7fc904c6076f075366&';
        }
      }
    }
  });
  return BolaBio;
};