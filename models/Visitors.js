const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
    username : {
       type : String,
       required : true
    },
    email : {
       type : String,
       required : true
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = Visitor;