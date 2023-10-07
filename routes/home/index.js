"use strict"; //준수하겠다.

const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('home/index');
});
router.get('/login',(req, res)=>{
    res.render("home/login");
    
});

module.exports = router; //외부에서 쓸 수 있도록 보내는것