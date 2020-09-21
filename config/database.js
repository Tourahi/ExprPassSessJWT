const mongoose = require('mongoose');

require('dotenv').config();

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.  To implement this, place the following
 * string into the `.env` file
 *
 * DB_STRING=mongodb://<user>:<password>@localhost:27017/database_name
 */

// const conn = process.env.DB_STRING;
//
// const connection = mongoose.createConnection(conn, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
//
// const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect( process.env.MONGO_URI+`/${process.env.DBNAME}`, {
      useNewUrlParser : true ,
      useUnifiedTopology: true,
      useFindAndModify : false
    });
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register
const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});


const User = mongoose.model('User', UserSchema);

// Expose the connection
module.exports = {
  connectDB, User
};
