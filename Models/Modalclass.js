const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({
    speciality:{
        type: String,
    },
    description:{
        type:String,
        required: true,
    },
    url:{
        type:String,
    }
});

const info = mongoose.model("Info",InfoSchema);
module.exports = info;
