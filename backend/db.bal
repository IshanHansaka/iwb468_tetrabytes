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