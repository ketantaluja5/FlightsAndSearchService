"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false, // here the constraint is only on javascript level, not on database level but then also it will not allow to insert null value in database,but we can insert null values if we directly insert in database
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
