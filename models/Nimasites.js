const mongoose = require('mongoose');

let NimasiteSchema = new mongoose.Schema ({
    username:{ 
        type: String, 
        lowercase: true,
        required:[true, 'Username is required'],
        minlength: [3, 'Username can\'t be smaller than 3 characters'],
        maxlength: [64, 'Username can\'t be greater than 64 characters' ],
        unique:true
    },
    college:{ 
        type: String, 
        lowercase: true,
        required:[true, 'College is required']
    },
    matric:{
        type : Number,
        required:[true, 'Matric Number is required'],
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
     required:[true, 'Email is required'],
     match: /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/
    },

},{
    timestamps: true
});

const Nimasite = mongoose.model('Nimasites',NimasiteSchema);

module.exports = Nimasite;
