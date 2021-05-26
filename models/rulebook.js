'use strict';
module.exports = (sequelize, DataTypes) => {
  const ruleBook = sequelize.define('ruleBook', {
    websiteId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'websites',
        key: 'id'
      }
    },
    tabName: DataTypes.STRING,
    xpath: DataTypes.STRING
  }, {});
  ruleBook.associate = function(models) {
    // associations can be defined here
  };
  return ruleBook;
};