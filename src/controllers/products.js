const express = require("express");
const routes = express.Router();
const authMiddleware = require('../middlewares/auth');

routes.use(authMiddleware);

module.exports = {
    show(req, res){
        return res.json({"ok":"true", userId:req.userId});
    }
}