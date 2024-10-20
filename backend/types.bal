public type Laptop record {
    readonly int id?;
    string brand;
    string model;
    string processor;
    string ram;
    string storage;
    string display;
    string gpu;
    string weight;
    string battery;
    string image_link;
};

public type Shop record {|
    readonly int id?;
    string name;
|};

public type Product record {|
    int laptopId;
    int shopId;
    int price;
    string warranty;
    boolean inStock;
    string lastUpdated;
|}