import ballerina/http;

@http:ServiceConfig {
    cors: {
        allowOrigins: ["*"]
    }
}

service / on new http:Listener(9090) {
    isolated resource function get product/[int id]() returns Product|error? {
        return getProduct(id);
    }

    isolated resource function get product() returns Product[]|error? {
        return getAllProducts();
    }

    isolated resource function get laptop/[int id]() returns Laptop|error? {
        return getLaptop(id);
    }

    isolated resource function get laptop() returns Laptop[]|error? {
        return getAllLaptops();
    }

    isolated resource function get shop/[int id]() returns Shop|error? {
        return getShop(id);
    }

    isolated resource function get shop() returns Shop[]|error? {
        return getAllShops();
    }
}