const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
dotenv.config({path:"./config.env"})
require('./db/conn')




app.use(express.urlencoded({extended:false}));

const  PORT =  process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})