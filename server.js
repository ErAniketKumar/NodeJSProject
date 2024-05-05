const express = require('express')
const app = express()
const port = process.env.PORT||3000;
const path=require('path');
const fs=require('fs');
const router=require(path.join(__dirname,'routes','thisRout.js'));
const mongoose=require('mongoose');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))