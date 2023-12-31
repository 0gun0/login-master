"use strict";

//모듈
const express = require('express');
const app = express();

//라우팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//앱 세팅
const home = require('./src/routes/home');
app.use('/', home); //use -> '미들웨어'를 등록해주는 메서드

module.exports = app;