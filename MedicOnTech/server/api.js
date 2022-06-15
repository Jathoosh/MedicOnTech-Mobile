const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_medicontech",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL !");
});

router.get("/patient", function (req, res) {
  // Connecting to the database.
  //db.getConnection(function (err, connection) {
  // Executing the MySQL query (select all data from the 'users' table).
  db.query("SELECT * FROM patient", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results);
  });
  //});
});
