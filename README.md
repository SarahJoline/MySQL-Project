# MySQL-Project

This app is built as an exercise in building a MySQL database and manipulationg it with Node.js

Technologies used include:
Node.js, Javascript, MySQL

You will need to install the following NPMs to get the app to work:
-inquirer
-mysql

To make this App I created a table on MySQL. I then created a connection between my app and mySQL so I could access the table using Node.js.

Here is the MySQL code:

DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products(
id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(140),
department_name VARCHAR(140),
price INTEGER,
stock_quantity INTEGER,
PRIMARY KEY(id, product_name, department_name, price, stock_quantity)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Shirt', 'Clothing', 15, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Pants', 'Clothing', 50, 40);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Computer', 'Electronics', 350, 50);
  
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Television', 'Electronics', 400, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Ashtrays', 'Books', 20, 35);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Kye', 'Books', 20, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Coat', 'Clothing', 100, 45);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Lamp', 'Home & Decor', 75, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Couch', 'Home & Decor', 700, 32);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Table', 'Home & Decor', 550, 38);

SELECT \* FROM products;

---

How the App works:

When you run the app the list of products will appear with their ID numbers. Inquirer will then prompt the user to select the product ID of the item they would like to purchase.

Then, they will be asked how many of said article they would like to buy. The total price is then calculated and the mySQL database is updated with the remaining stock.
