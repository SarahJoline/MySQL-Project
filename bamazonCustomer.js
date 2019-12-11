const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connection set up! Woohoo!");
});
