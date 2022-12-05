const express = require("express");
const db = require("./utils/database");
const initModel = require("./models/init.model");
const { json } = require("sequelize");
const usersRoutes = require("./routes/user.routes");
const productsRoutes = require("./routes/products.routes");
const authRoutes = require("./routes/auth.routes");
require("dotenv").config();
const morgan = require("morgan");
const handleError = require("./middlewares/error");
const cors = require("cors");
const app = express();

initModel();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("Sync exitosa"))
  .catch((error) => console.log(error));

console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server" });
});

app.use("/api/final/users", usersRoutes);
app.use("/api/final/products", productsRoutes);
app.use("/api/final/", authRoutes);

app.use(handleError);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
