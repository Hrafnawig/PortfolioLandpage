'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    static associate(models) {
      // define association here
    }
  };
  Hotel.init({
    city: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    in: DataTypes.DATE,
    out: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};