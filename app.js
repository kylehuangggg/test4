const express = require('express');
const app = express();
const  mongoose  = require('mongoose');
require('dotenv/config');

//conect to mongodb
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser:true},()=>
    console.log('connect to db'));
//routes
app.get('/',(req,res) => {
    res.send('this is home page');
});

//listen to the server
app.listen(3000);