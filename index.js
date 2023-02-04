const express= require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

const route = require('./routes/route');

const PORT = process.env.PORT || 5000;


//middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use('/affluence/info',route);
//connecting to mongodb atlas;
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser:true}
    )
    .then(() => {
        console.warn("Connected to Mongodb atlas");
    }).catch(error =>{
        console.warn(`error is occured with ${error}`);
    });
    app.listen(PORT, () => {
        console.log("Server Started at port", PORT);
    })