const authConfig = require("../config/auth")
const express = require("express");
const routes = express.Router();

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    //verificar se existe o Token
    if(!authHeader) res.status(401).json({"error":"No Token Provided"})

    const parts = authHeader.split(" ");
    if(parts.length == 2) res.status(401).json({"error":"Token invalid"})

    const {scheme, token} = parts;

    if(!/^Bearer$/i.test(scheme)){
        res.status(401).json({"error":"Token malformatted"})
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).json({"error":"Token invalid"});
        req.userId = decoded.id;
        return next();
    })

}