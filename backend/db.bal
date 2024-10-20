import ballerinax/mysql;

configurable string USER = ?;
configurable string PASSWORD = ?;
configurable string HOST = ?;
configurable int PORT = ?;
configurable string DATABASE = ?;

final mysql:Client dbClient = check new (
    host = HOST, user = USER, password = PASSWORD, port = PORT, database = "laptop_db"
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

isolated function getCombinedAllProducts() returns CombinedProduct[]|error {
    CombinedProduct[] combinedProducts = [];
    
    stream<CombinedProduct, error?> resultStream = dbClient->query(
        `SELECT 
            l.id AS laptop_id, 
            l.brand, 
            l.model, 
            l.processor, 
            l.ram, 
            l.storage, 
            l.short_ram,
            l.short_processor,
            l.display, 
            l.gpu, 
            l.weight, 
            l.battery, 
            l.image_link, 
            JSON_ARRAYAGG(
                JSON_OBJECT(
                    'shop_id', s.id, 
                    'shop_name', s.name, 
                    'price', p.price, 
                    'warranty', p.warranty, 
                    'in_stock', p.in_stock, 
                    'last_updated', p.last_updated
                )
            ) AS shops 
            FROM 
                laptop l 
            JOIN 
                product p ON l.id = p.laptop_id 
            JOIN 
                shop s ON p.shop_id = s.id 
            GROUP BY 
                l.id, l.brand, l.model, l.processor, l.ram, l.storage, l.short_ram, l.short_processor,
                l.display, l.gpu, l.weight, l.battery, l.image_link;`
    );

    check from CombinedProduct combinedProduct in resultStream
        do {
            combinedProducts.push(combinedProduct);
        };
    check resultStream.close();
    return combinedProducts;
}