const express = require('express');
const app  = express();
 
 



const dotenv = require("dotenv").config();
app.use(express.json());

app.set("view engine ", "ejs");
const cors  = require("cors");


app.use(express.urlencoded({extended:true}));
 
 
const { getEvents, registerEvent, bookmarkSession } = require('./Controller/attendeeController');

const {connectionDB} = require('./Config/ConnectionDB');

 

// Routes
app.route('/events').get(getEvents);
app.route('/register').post(registerEvent);
app.route('/bookmark').post(bookmarkSession);

 

 


app.listen(process.env.PORT,function(){

    console.log(`SERVER IS RUNNING ON THE PORT ${process.env.PORT}`);
    connectionDB();
     

})
