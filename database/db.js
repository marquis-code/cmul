const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('', {
            useNewUrlParser : true,
            useUnifiedTopology : true
        });

        console.log('Successfully Connected to MongoDb database');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = connectDB;