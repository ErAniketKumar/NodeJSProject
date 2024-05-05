const express = require('express');
const router = require('./routes/thisRout');
const app = express()
const port = process.env.PORT||3000;
const path=require('path');
const fs=require('fs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.set('views','./views');
app.set('view engine','ejs');
app.use('/',router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
