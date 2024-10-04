const express = require("express");
const { SignUp, Login, Token } = require("../controllers/user.controller");
const userRoute = express.Router();

userRoute.post("/auth/signup", SignUp);
userRoute.post("/auth/login", Login);

module.exports = userRoute;
