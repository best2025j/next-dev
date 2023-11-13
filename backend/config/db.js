const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });
const uri = process.env.MONGO_URI;

const connectDatabase = async () => {
   try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to database successfully`)
   } catch(err) {
    console.log(`Error connecting to database ${err}`);
   }
}

module.exports = connectDatabase;