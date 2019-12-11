const mysql = require("mysql");
var inquirer = require("inquirer");

var myItems = [];
var selectedItem = [];

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
  seeAllProducts();
  connection.end();
});

const seeAllProducts = () => {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;

    for (var i = 0; i < res.length; i++) {
      var items = res[i];
      myItems.push(items);
      console.log(
        "ID: " +
          res[i].id +
          "  Item: " +
          res[i].product_name +
          "  $" +
          res[i].price
      );
    }
    console.log(myItems);
    selectID();
  });
};

const selectID = () => {
  inquirer
    .prompt({
      type: "input",
      message: "Please enter the product ID",
      name: "productID"
    })
    .then(res => {
      var ID = res.productID;
      for (var i = 0; i < myItems.length; i++) {
        if (ID == myItems[i].id) {
          selectedItem.push(myItems[i]);
        }
      }
      orderQuantity();
    });
};

const orderQuantity = () => {
  inquirer
    .prompt({
      type: "input",
      message: "Select how many you would like to purchase",
      name: "quantity"
    })
    .then(res => {
      console.log(res.quantity);
      //if I do it this way does it mean that I can't update the database?
    });
};

//find the stock quantity that corresponds to the id#
//if there are not enough in stock
//console.log Not enough in stock
//else
//find the price of the item associated with the selected product ID.
// multiply price by quanitity
//update the database with the new quantity
