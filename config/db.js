const mongoose = require("mongoose");

const DB_URL =
  process.env.MONGO_URI ||
  "mongodb+srv://admin:admin@mycluster.xntmcj2.mongodb.net/?retryWrites=true&w=majority";
// const DB_URL = "mongodb://localhost:27017/todo-app";

const db = mongoose.connect(DB_URL);

module.exports = db;
