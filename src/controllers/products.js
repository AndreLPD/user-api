const express = require("express");
const routes = express.Router();

module.exports = {
    show(req, res){
        return res.json({"ok":"true"});
    }
}