### SQL Queries

```sql
CREATE TABLE shop01 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    model_name VARCHAR(255),
    price INT,
    warranty VARCHAR(255),
    in_stock BOOLEAN,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE shop02 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    model_name VARCHAR(255),
    price INT,
    warranty VARCHAR(255),
    in_stock BOOLEAN,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE shop03 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    model_name VARCHAR(255),
    price INT,
    warranty VARCHAR(255),
    in_stock BOOLEAN,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

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
```