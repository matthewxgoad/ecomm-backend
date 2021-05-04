// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: false,
      unique: true,
      validate: {},
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      allowNull: false,
      validate: {}
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: 'id'
      },
      validate: {},
    },
  },
  {
    hooks: {},
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
