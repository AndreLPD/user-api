const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./src/routes")
const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api/user", routes);

app.listen(3000, function(){
    console.log("Api On: localhost:3000");
})

