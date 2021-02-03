"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {}
  }
  Country.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Country",
    }
  );
  return Country;
};