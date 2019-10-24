const userController = require("./controllers/user");
const express = require("express");
const routes = express.Router();

routes.post('/login', userController.show);
routes.post('/register', userController.store);

module.exports = routes;