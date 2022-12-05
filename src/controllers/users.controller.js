const { UserServices } = require("../services/users.services");
const transporter = require("../utils/mailter");
const welcomeTemplate = require("../templates/welcome");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.createUser(newUser);
    res.status(201).json(result);

    transporter.sendMail({
      from: "<julianmcor19@gmail.com>",
      to: result.email,
      subject: "Bienvenido de nuevo a mi Api Final",
      text: `Hola ${result.username} bienvenido a una Api final hecha en Academlo`,
      html: welcomeTemplate(result.username),
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Aún faltan datos",
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await UserServices.getUser(id);
    res.json(users);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

module.exports = {
  userRegister,
  getUser,
};
