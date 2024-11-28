const mongoose = require("mongoose");
// require("dotenv").config()

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/bulk-veggie-db");
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
