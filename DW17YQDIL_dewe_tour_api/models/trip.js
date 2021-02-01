"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Trip.hasOne(models.Transaction);
      Trip.belongsTo(models.Country, {
        as: "country",
        foreignKey: {
          name: "countryId",
        },
      });
    }
  }
  Trip.init(
    {
      title: DataTypes.STRING,
      countryId: DataTypes.INTEGER,
      accomodation: DataTypes.STRING,
      transportation: DataTypes.STRING,
      eat: DataTypes.STRING,
      day: DataTypes.INTEGER,
      night: DataTypes.INTEGER,
      dateTrip: DataTypes.DATE,
      price: DataTypes.INTEGER,
      quota: DataTypes.INTEGER,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      screen1: DataTypes.STRING,
      screen2: DataTypes.STRING,
      screen3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Trip",
    }
  );
  return Trip;
};
