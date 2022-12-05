const { Cart, ProductInCart, Products } = require("../models/index");

class CartServices {
  static async readCart(id) {
    try {
      const result = await Cart.findOne({
        where: { id },
        attributes: {
          exclude: ["userId", "user_id"],
        },
        include: {
          model: ProductInCart,
          as: "products",
          attributes: {
            exclude: ["cartId", "cart_id", "productId", "product_id"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addCart(id, product) {
    try {
      const idProduct = product.productId;
      const priceProduct = await Products.findOne({ where: { id: idProduct } });
      const priceTotalProduct = product.quantity * priceProduct.price;
      const result = await ProductInCart.create({
        ...product,
        price: priceTotalProduct,
        cartId: id,
      });
      const totalPriceCartArray = await ProductInCart.findAll();

      const totalPriceCart = totalPriceCartArray.map((e) => {
        return e.price;
      });
      const priceTotal = totalPriceCart.reduce((a, b) => a + b);
      const cart = await Cart.findOne({ where: { id } });
      const res = await cart.update({ totalPrice: priceTotal });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;
