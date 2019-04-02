// express import
const express = require('express');
const app = express();

// pody-parser import
let bodyParser = require('body-parser');

// body解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// 監聽 port
const port = process.env.port || 3000;
app.listen(3000, function() {
    console.log(`Example app is running on port ${port} !!!`);
});

/* ---------------  Middleware  ----------------- */

// middleware 中介軟體 (app.use 類似守門員)
app.use(function(req, res, next) {
    console.log('已登入');
    next();
});

// 連結到 index.html  (Homepage)
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


/* ---------------  Car router  ----------------- */

let car = require('./routes/car');

app.use('/car', car);





