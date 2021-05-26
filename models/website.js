'use strict';
module.exports = (sequelize, DataTypes) => {
  const website = sequelize.define('website', {
    endPoint: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  website.associate = function(models) {
    // associations can be defined here
  };
  return website;
};