import ballerina/http;

service /laptop on new http:Listener(8080) {
    
    isolated resource function get [int id]() returns Laptop|error? {
        return getLaptop(id);
    }
    
    isolated resource function get .() returns Laptop[]|error? {
        return getAllLaptops();
    }

}