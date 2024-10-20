import ballerina/http;

service /product on new http:Listener(7070) {
    isolated resource function get [int id]() returns Product|error? {
        return getProduct(id);
    }

    isolated resource function get .() returns Product[]|error? {
        return getAllProducts();
    }
}

service /laptop on new http:Listener(8080) {
    isolated resource function get [int id]() returns Laptop|error? {
        return getLaptop(id);
    }

    isolated resource function get .() returns Laptop[]|error? {
        return getAllLaptops();
    }
}

service /shop on new http:Listener(9090) {
    isolated resource function get [int id]() returns Shop|error? {
        return getShop(id);
    }

    isolated resource function get .() returns Shop[]|error? {
        return getAllShops();
    }
}