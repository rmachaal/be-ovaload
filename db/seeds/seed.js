const mongoose = require("mongoose");
const connectDB = require("../connection");
const User = require("../../models/user");
const users = require("../data/test-data/users");

const seedDatabase = async () => {
  try {
    await connectDB();
    // Clear existing data
    await User.deleteMany({});
    // Insert new data
    await User.insertMany(users);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  // } finally {
  //   console.log("Closing database connection");
  //   mongoose.connection.close();
  // }
}};

module.exports = seedDatabase;
