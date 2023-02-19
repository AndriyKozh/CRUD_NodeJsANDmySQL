const mysql = require("mysql");
require("dotenv").config();
const { HOST, USER, PASSWORD, DATABASE } = process.env;

const db = mysql.createPool({
  host: "localhost",
  user: "",
  password: "",
  database: "",
});

exports.db = db;
