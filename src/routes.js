const userController = require("./controllers/user");
const productsController = require("./controllers/products");
const express = require("express");
const routes = express.Router();

routes.post('/login', userController.show);
routes.post('/register', userController.store);
routes.get('/products', productsController.show);

module.exports = routes;