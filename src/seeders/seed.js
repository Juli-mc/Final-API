const db = require("../utils/database");
const Users = require("../models/user.model");
const Products = require("../models/product.model");
const Cart = require("../models/cart.model");
const Order = require("../models/order.model");
const productInCart = require("../models/productInCart.model");
const productInOrder = require("../models/productInOrder.model");
const initModel = require("../models/init.model");

initModel();

const users = [
  { username: "JuliMc", email: "juli@gmail.com", password: "1234" },
  { username: "Cod", email: "cod@gmail.com", password: "1234" },
  { username: "Karen", email: "Karen@gmail.com", password: "1234" },
];

const products = [
  {
    product: "Dualshock 5",
    price: 150000,
    availableQt: 10,
    userId: 1,
    iamge: "",
  },
  { product: "Takis", price: 2500, availableQt: 25, userId: 2, image: "" },
  { product: "Pedyalite", price: 7500, availableQt: 15, userId: 3, image: "" },
];

const cart = [
  { userId: 1, totalPrice: 302500 },
  { userId: 2, totalPrice: 150000 },
  { userId: 3, totalPrice: 5000 },
];

const order = [
  { totalPrice: 302500, userId: 1 },
  { totalPrice: 150000, userId: 2 },
  { totalPrice: 5000, userId: 3 },
];

const productsInCart = [
  { cartId: 1, productId: 1, quantity: 2, price: 150000 },
  { cartId: 1, productId: 2, quantity: 1, price: 2500 },
  { cartId: 2, productId: 1, quantity: 1, price: 150000 },
  { cartId: 3, productId: 2, quantity: 1, price: 2500 },
  { cartId: 3, productId: 2, quantity: 1, price: 2500 },
];

const productsInOrder = [
  { orderId: 1, productId: 1, quantity: 2, price: 302500 },
  { orderId: 2, productId: 1, quantity: 1, price: 150000 },
  { orderId: 3, productId: 2, quantity: 2, price: 5000 },
];

db.sync({ force: true })
  .then(() => {
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      products.forEach((products) => Products.create(products));
    }, 100);
    setTimeout(() => {
      cart.forEach((cart) => Cart.create(cart));
    }, 200);
    setTimeout(() => {
      order.forEach((order) => Order.create(order));
    }, 300);
    setTimeout(() => {
      productsInCart.forEach((productsInCart) =>
        productInCart.create(productsInCart)
      );
    }, 400);
    setTimeout(() => {
      productsInOrder.forEach((productsInOrder) =>
        productInOrder.create(productsInOrder)
      );
    }, 500);
    console.log("plantación de data semilla exitosa");
  })
  .catch((error) => console.log(error));
