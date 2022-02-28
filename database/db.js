const mongoose = require('mongoose');

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Nimsa-Journal', dbOptions);
        console.log('Connection to database was successful');
    } catch (error) {
        console.log('Connection to MongoDB Failed', error);
    }
}

module.exports = connectDB;


/*Nimsa-Journal MongoDb Cluster connection online setting */
// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb+srv://nimsa-user:nimsa-journal@nimsa-journal.qkzyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//             useNewUrlParser : true,
//             useUnifiedTopology : true
//         });

//         console.log('Successfully Connected to MongoDb database');
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// module.exports = connectDB;