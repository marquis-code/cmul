const mongoose = require('mongoose');

let PublishersSchema = new mongoose.Schema ({
    username:{ 
        type: String, 
        lowercase: true,
        required:[true, 'Username is required'],
        minlength: [3, 'Username can\'t be smaller than 3 characters'],
        maxlength: [64, 'Username can\'t be greater than 64 characters' ],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minlength:8,
        maxlength:200,
        unique:true
    }, 
    email:{
     type: String,
     unique: true,
     trim: true,
     lowercase: true,
     required:[true, 'Email is required']
    }
},{
    timestamps: true
});

const Publisher = mongoose.model('Publishers',PublishersSchema);

module.exports = Publisher;
