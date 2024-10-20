### SQL Queries

```sql
CREATE DATABASE laptop_db;
USE laptop_db;

CREATE TABLE laptop (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(255),
    model VARCHAR(255),
    processor VARCHAR(255),
    ram VARCHAR(255),
    storage VARCHAR(255),
    display VARCHAR(255),
    gpu VARCHAR(255),
    weight VARCHAR(255),
    battery VARCHAR(255),
    image_link VARCHAR(255)
);

CREATE TABLE shop (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE product (
    laptop_id INT,
    shop_id INT,
    price INT,
    warranty VARCHAR(255),
    in_stock BOOLEAN,
    last_updated VARCHAR(255),
    PRIMARY KEY (laptop_id, shop_id),
    FOREIGN KEY (laptop_id) REFERENCES laptop(id),
    FOREIGN KEY (shop_id) REFERENCES shop(id)
);
```