const express = require("express");
const route = express.Router();
const userInform = require('../controller/userController');

route.get('/', userInform.user);

module.exports = route;