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
    int laptop_id;
    int shop_id;
    int price;
    string warranty;
    boolean in_stock;
    string last_updated;
|};

public type CombinedProduct record {|
    readonly int laptop_id;
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
    json shops;
|};