'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class uploads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  uploads.init({
    id: DataTypes.BIGINT,
    file_name: DataTypes.STRING,
    image_id: DataTypes.UUID,
    thumbnail_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'uploads',
  });
  return uploads;
};