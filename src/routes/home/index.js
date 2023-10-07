"use strict"; //준수하겠다.

const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.home); 
router.get('/login', ctrl.login);

module.exports = router; //외부에서 쓸 수 있도록 보내는것