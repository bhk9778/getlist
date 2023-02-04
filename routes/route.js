const express = require('express');
const route = express.Router();
const Info = require('../Models/Modalclass');




route.post('/',(req,res)=>{
    info1 = new Info({
        speciality:req.body.Speciality,
        description:req.body.Description,
        url:req.body.Url
    });
    info1.save().then(info1=>{
        res.send(info1);
    }).catch(error=>{
        Info.find().then(info1 => res.send(info1))
    });
});

route.get("/",(req,res)=>{
    Info.find().then(info1 => res.send(info1))
});
module.exports = route