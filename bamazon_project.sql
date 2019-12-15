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


SELECT * FROM products;
