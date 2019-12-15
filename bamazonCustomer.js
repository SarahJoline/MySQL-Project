const mysql = require("mysql");
var inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

connection.connect(err => {
  if (err) throw err;
  seeAllProducts();
  connection.end();
});

const seeAllProducts = () => {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    const table = res;

    for (var i = 0; i < res.length; i++) {
      var items = res[i];
      console.log(
        "ID: " +
          items.id +
          "  Item: " +
          items.product_name +
          "  $" +
          items.price
      );
    }
    selectID(table);
  });
};

const selectID = table => {
  inquirer
    .prompt({
      type: "input",
      message: "Please enter the product ID",
      name: "productID"
    })
    .then(res => {
      var ID = res.productID;
      for (var i = 0; i < table.length; i++) {
        if (ID == table[i].id) {
          var myItem = table[i];
        }
      }
      orderQuantity(ID, myItem);
    });
};

const orderQuantity = (ID, myItem) => {
  inquirer
    .prompt({
      type: "input",
      message: "Select how many you would like to purchase",
      name: "quantity"
    })
    .then(res => {
      let ammount = res.quantity;
      if (ammount > myItem.stock_quantity) {
        console.log("Not enough Items in stock");
      } else {
        var totalPrice = myItem.price * ammount;
        console.log(`Checkout total is $${totalPrice}`);
        let newStock = myItem.stock_quantity - ammount;
        console.log(newStock);
        updateStock(newStock, ID);
      }
    });
};

const updateStock = (newStock, ID) => {
  connection.query("SELECT * FROM products WHERE id = " + ID, (err, result) => {
    console.log(result);
    connection.query(
      "UPDATE products SET stock_quantity = stock_quantity " +
        newStock +
        " WHERE item_id = " +
        ID
    );
  });
};
