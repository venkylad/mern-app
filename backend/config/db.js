const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`mongo connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error occured : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
