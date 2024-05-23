const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const env = process.env.NODE_ENV || "development";
const envFile =
  env === "test"
    ? ".env.test"
    : env === "production"
    ? ".env.production"
      : ".env.development";
    
dotenv.config({ path: path.resolve(process.cwd(), envFile) });
const mongoString = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(mongoString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit process with failure
  }
};
module.exports = connectDB;