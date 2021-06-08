// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       db,
//       {
//         useNewUrlParser: true
//       }
//     );

//     console.log('MongoDB is Connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        //database Name
        const databaseName='cyber_playground';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB