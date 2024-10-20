import ballerinax/mysql;

configurable string USER = ?;
configurable string PASSWORD = ?;
configurable string HOST = ?;
configurable int PORT = ?;
configurable string DATABASE = ?;

final mysql:Client dbClient = check new(
    host=HOST, user=USER, password=PASSWORD, port=PORT, database="laptop_db"
);


isolated function getLaptop(int id) returns Laptop|error {
    Laptop laptop = check dbClient->queryRow(
        `SELECT * FROM laptop WHERE id = ${id}`
    );
    return laptop;
}

isolated function getAllLaptops() returns Laptop[]|error {
    Laptop[] laptops = [];
    stream<Laptop, error?> resultStream = dbClient->query(
        `SELECT * FROM laptop`
    );
    check from Laptop laptop in resultStream
        do {
            laptops.push(laptop);
        };
    check resultStream.close();
    return laptops;
}

isolated function getShop(int id) returns Shop|error {
    Shop shop = check dbClient->queryRow(
        `SELECT * FROM shop WHERE id = ${id}`
    );
    return shop;
}

isolated function getAllShops() returns Shop[]|error {
   Shop[] shops = [];
    stream<Shop, error?> resultStream = dbClient->query(
        `SELECT * FROM shop`
    );
    check from Shop shop in resultStream
        do {
            shops.push(shop);
        };
    check resultStream.close();
    return shops;
}
isolated function getProduct(int id) returns Product|error {
    Product product = check dbClient->queryRow(
        `SELECT * FROM product WHERE laptop_id = ${id}`
    );
    return product;
}

isolated function getAllProducts() returns Product[]|error {
   Product[] products = [];
    stream<Product, error?> resultStream = dbClient->query(
        `SELECT * FROM product`
    );
    check from Product product in resultStream
        do {
            products.push(product);
        };
    check resultStream.close();
    return products;
}