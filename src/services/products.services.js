const Products = require("../models/product.model");

class ProductsServices {
  static async create(product, categories) {
    try {
      const productResult = await Products.create(product);
      const { id } = productResult;
      categories.forEach(
        async (category) =>
          await ProductsCategories.create({
            categoryId: category,
            productId: id,
          })
      );
      return productResult;
    } catch (error) {
      throw error;
    }
  }

  static async get(userId) {
    try {
      const result = await Products.findAll({
        where: {
          id: userId,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsServices;
