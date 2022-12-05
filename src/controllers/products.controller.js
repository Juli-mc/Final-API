const { ProductsServices } = require("../services/products.services");

const getProductsAll = async (req, res, next) => {
  try {
    const allProducts = await ProductsServices.getProdAll();
    const productsAvailable = [];
    allProducts.forEach((e) => {
      if (e.availableQty > 0) {
        productsAvailable.push(e);
      }
    });
    console.log(productsAvailable);
    res.json(productsAvailable);
  } catch (error) {
    next({
      message: "No se han podido obtener los productos",
      status: 400,
      errorContent: error,
    });
  }
};
const getProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await ProductsServices.getProd(id);
    const productsAvailable = [];
    products.products.forEach((e) => {
      if (e.availableQty > 0) {
        productsAvailable.push(e);
      }
    });
    res.json({ username: products.username, products: productsAvailable });
  } catch (error) {
    next({
      message: "No se han podido obtener los productos",
      status: 400,
      errorContent: error,
    });
  }
};
const createProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await ProductsServices.createProd(id, body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salió mal",
    });
  }
};

module.exports = {
  getProductsAll,
  getProducts,
  createProducts,
};
