const Users = require("./user.model");
const Products = require("./product.model");
const Cart = require("./cart.model");
const Order = require("./order.model");
const productInCart = require("./productInCart.model");
const productInOrder = require("./productInOrder.model");

const initModels = () => {
  // 1X1

  Cart.belongsTo(Users, { as: "carritos", foreignKey: "user_id" });
  Users.hasOne(Cart, { as: "propietario", foreignKey: "user_id" });

  // 1 x M

  Products.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(Products, { as: "products", foreignKey: "user_id" });

  //1 x M

  Order.belongsTo(Users, { as: "compra", foreignKey: "user_id" });
  Users.hasMany(Order, { as: "purchased", foreignKey: "user_id" });

  // m x m

  productInOrder.belongsTo(Order, { foreignKey: "order_id" });
  Order.hasMany(productInOrder, { as: "orders", foreignKey: "order_id" });

  productInOrder.belongsTo(Products, { foreignKey: "product_id" });
  Products.hasMany(productInOrder, { foreignKey: "product_id" });

  // m x m

  productInCart.belongsTo(Cart, { foreignKey: "cart_id" });
  Cart.hasMany(productInCart, { as: "products", foreignKey: "cart_id" });

  productInCart.belongsTo(Products, { foreignKey: "product_id" });
  Products.hasMany(productInCart, { foreignKey: "product_id" });
};

module.exports = initModels;
