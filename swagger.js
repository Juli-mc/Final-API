const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tienda Juli",
      version: "1.0.0",
      description: "API final para Academlo",
    },
  },
  apis: [
    "./src/routes/user.routes.js",
    "./src/models/user.model.js",

    "./src/routes/products.routes.js",
    "./src/models/product.model.js",
    "./src/routes/cart.routes.js",
    "./src/models/productInCart.model.js",

    "./src/routes/order.routes.js",
    "./src/models/productInOrder.model.js",

    "./src/routes/auth.routes.js",
    "./src/models/auth.model.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
