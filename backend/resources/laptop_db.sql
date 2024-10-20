CREATE DATABASE laptop_db;
USE laptop_db;

-- creating laptop table
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

-- creating shop table
CREATE TABLE shop (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

-- creating product table
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

-- Inserting laptop01
INSERT INTO laptop (id, brand, model, processor, ram, storage, display, gpu, weight, battery, image_link)
VALUES (1, 'ASUS', 'Vivobook Pro 15 Q543M Ultra9', 'Intel® Core™ Ultra 9-185H (24M Cache, up to 5.10Hz, 16 Cores 22 Threads) with Intel AI Boost', 
        '24GB DDR5 4800MHZ (8GB Onboard + 16GB Removable)', '2TB M.2 NVME SSD', '15.6-inch, FHD (1920 x 1080) OLED', 'NVIDIA® GeForce RTX 3050 6GB GDDR6', 
        '1.9kg', '75WHrs', 'https://www.nanotek.lk/uploads/product/2327-20240319135914-download%20(3).png');

-- Inserting laptop02
INSERT INTO laptop (id, brand, model, processor, ram, storage, display, gpu, weight, battery, image_link)
VALUES (2, 'MSI', 'Cyborg 15 A13UCX', 'Intel® Core™ i7-13620H (24M Cache, up to 4.90 GHz, 10 Core)', 
        '16GB DDR5 4800MHZ', '512GB M.2 NVME GEN4 SSD', '15.6" 1080P 144Hz 45% NTSC IPS Level', 'NVIDIA® GeForce RTX 2050 4GB GDDR6', 
        '1.98kg', '53.5WHrs', 'https://www.nanotek.lk/uploads/product/21-20240822142813-1675-20240723093908-CYBORG%20(1).png');

-- Inserting laptop03
INSERT INTO laptop (id, brand, model, processor, ram, storage, display, gpu, weight, battery, image_link)
VALUES (3, 'Lenovo', 'Legion 9 16IRX9', 'Intel® Core™ i9-14900HX, 24 Cores 5.8GHz 36MB', 
        '64GB DDR5 5600Mhz', '2TB NVME GEN4 M.2 SSD (1TB + 1TB)', '16" 3.2K (3200x2000) Mini LED 1200nits Anti-glare, 100% DCI-P3, 100% Adobe® RGB, 100% sRGB, 165Hz', 
        'NVIDIA RTX 4090 16GB GDDR6, 2040MHz, TGP 175W, 686 AI TOPS', '2.6 kg', '99.9 WHr', 'https://www.nanotek.lk/uploads/product/2470-20240731213957-Legion_9_16IRX9_CT1_01.png');

-- Inserting laptop04
INSERT INTO laptop (id, brand, model, processor, ram, storage, display, gpu, weight, battery, image_link)
VALUES (4, 'ASUS', 'ROG Strix SCAR 16 G634JZR', 'Intel Core i9 14900HX (36MB Cache, up to 5.8 GHz, 24 cores, 32 Threads)', 
        '32GB DDR5 5600MHZ (16GB x2)', '2TB PCIe® 4.0 NVMe™ M.2 Performance SSD (1TB + 1TB)', '16-inch QHD+ 16:10 (2560 x 1600, WQXGA) 240Hz ROG Nebula HDR Display, G-Sync and Pantone Validated', 
        'NVIDIA GeForce RTX 4080 -12GB GDDR6', '2.65 kg', '90WHrs', 'https://www.nanotek.lk/uploads/product/1421-20240311143728-h732%20(2).png');

-- Inserting laptop05
INSERT INTO laptop (id, brand, model, processor, ram, storage, display, gpu, weight, battery, image_link)
VALUES (5, 'MSI', 'Modern 15 B13M', 'Intel® Core™ i5-1335U (12MB Cache, up to 4.6 GHz, 10 cores, 12 Threads)', 
        '16GB DDR4 3200MHZ (Onboard)', '512GB NVME GEN4 M.2 SSD', '15.6” 1080P Display IPS LEVEL', 'Intel Iris Xe Graphics', 
        '1.7kg', '39.3WHrs', 'https://www.nanotek.lk/uploads/product/2074-20240808155453-MODERN%20B12M.png');

-- Inserting laptop06
INSERT INTO laptop (id, brand, model, processor, ram, storage, display, gpu, weight, battery, image_link)
VALUES (6, 'Apple', 'MacBook Air M3 8GB 256GB 13" (2024)', 'Apple M3 8-core CPU 8-core GPU', 
        '8GB unified memory', '256GB SSD', '13.6-inch Liquid Retina display with True Tone²', 
        'Apple 8-core GPU', '1.24kg', '52.6 WHrs', 'https://www.nanotek.lk/uploads/product/2018-20240420061514-Untitled-1%20(2).png');

-- Inserting laptop07
INSERT INTO laptop (id, brand, model, processor, ram, storage, display, gpu, weight, battery, image_link)
VALUES (7, 'Acer', 'Aspire A15-51P-39HQ', 'Intel® Core™ i3-100U Processor (10M Cache, up to 4.7GHz)', 
        '8GB LPDDR5 4800MHz', '512GB NVME SSD', '15.6" FHD (1920x1080) IPS', 
        'Intel® UHD Graphics', '1.8kg', '50WHrs', 'https://www.nanotek.lk/uploads/product/2503-20240903132009-ACER%20ASPIRE%20A515-58P%2013TH%20GEN.png');

-- Inserting laptop08
INSERT INTO laptop (id, brand, model, processor, ram, storage, display, gpu, weight, battery, image_link)
VALUES (8, 'Dell', 'Inspiron 3520', 'Intel® Core™ i5-1235U (12M Cache, up to 4.40GHz)', 
        '8GB DDR4 2666MHz', '512GB NVME M.2 SSD', '15.6" FHD (1920x1080) IPS-Level', 
        'Intel UHD Graphics', '1.65kg', '41WHrs', 'https://www.nanotek.lk/uploads/product/1638-20240924175012-dell-inspiron-3520-laptop-396-cm-156-full-hd-intel-core-i5-i5-1235u-8-gb-ddr4-sdram-512-gb-ssd-wi-fi-6-80211ax-windows-11-black.png');

-- Inserting laptop09
INSERT INTO laptop (id, brand, model, processor, ram, storage, display, gpu, weight, battery, image_link)
VALUES (9, 'HP', 'Victus 15 FB2082WM', 'AMD Ryzen™ 5 8645HS (6 Core, 12 Threads-16M Cache, up to 5 GHz)', 
        '8GB DDR5 4800MHz', '512GB GEN4 NVME M.2 SSD', 
        '15.6" FHD IPS LED Display 144HZ Thin Bezel (300 nits)', 
        'NVIDIA® GeForce RTX 4050 6GB GDDR6', '2.29kg', '70 WHr', 
        'https://www.nanotek.lk/uploads/product/1426-20240809183526-HP%20Victus%2015%202023.png');

INSERT INTO laptop (id, brand, model, processor, ram, storage, display, gpu, weight, battery, image_link)
VALUES (11, 'HP', 'Victus 15 FB2082WM', 'AMD Ryzen™ 5 8645HS (6 Core, 12 Threads-16M Cache, up to 5 GHz)', 
        '8GB DDR5 4800MHz', '512GB GEN4 NVME M.2 SSD', '15.6" FHD IPS LED Display 144HZ Thin Bezel (300 nits)', 
        'NVIDIA® GeForce RTX 4050 6GB GDDR6 (TDP 75W)', '2.29KG', '70 WHr', 'https://www.nanotek.lk/uploads/product/1426-20240809183526-HP%20Victus%2015%202023.png');


-- Inserting shop01
INSERT INTO shop (name) VALUES ('shop01');

-- Inserting shop02
INSERT INTO shop (name) VALUES ('shop02');

-- Inserting shop03
INSERT INTO shop (name) VALUES ('shop03');

-- For the first API set (shop01)
INSERT INTO product (laptop_id, shop_id, price, warranty, in_stock, last_updated)
VALUES
(1, 1, 449000, '1 Year', TRUE, '2024-10-20'),
(2, 1, 304000, '2 Year', TRUE, '2024-10-20'),
(3, 1, 1395000, '2 Year', FALSE, '2024-10-20'),
(4, 1, 1589000, '2 Year', TRUE, '2024-10-20'),
(5, 1, 215000, '2 Year', TRUE, '2024-10-20'),
(6, 1, 349000, '1 Year', TRUE, '2024-10-20'),
(7, 1, 156000, '2 Year', TRUE, '2024-10-20'),
(8, 1, 179000, '3 Year', TRUE, '2024-10-20'),
(9, 1, 499000, '2 Year', TRUE, '2024-10-20'),
(10, 1, 289000, '1 Year', FALSE, '2024-10-20');

-- For the second API set (shop02)
INSERT INTO product (laptop_id, shop_id, price, warranty, in_stock, last_updated)
VALUES
(1, 2, 445000, '1 Year', TRUE, '2024-10-20'),
(2, 2, 305000, '2 Year', TRUE, '2024-10-20'),
(3, 2, 1393000, '2 Year', TRUE, '2024-10-20'),
(4, 2, 1585000, '2 Year', TRUE, '2024-10-20'),
(5, 2, 210000, '1 Year', FALSE, '2024-10-20'),
(6, 2, 345000, '1 Year', TRUE, '2024-10-20'),
(7, 2, 157000, '2 Year', TRUE, '2024-10-20'),
(8, 2, 180000, '3 Year', TRUE, '2024-10-20'),
(9, 2, 498000, '2 Year', TRUE, '2024-10-20'),
(10, 2, 290000, '1 Year', FALSE, '2024-10-20');

-- For the third API set (shop03)
INSERT INTO product (laptop_id, shop_id, price, warranty, in_stock, last_updated)
VALUES
(1, 3, 330000, '1 Year', TRUE, '2024-10-20'),
(2, 3, 310000, '2 Year', TRUE, '2024-10-20'),
(3, 3, 1398000, '3 Year', TRUE, '2024-10-20'),
(4, 3, 1610000, '3 Year', TRUE, '2024-10-20'),
(5, 3, 220000, '1 Year', TRUE, '2024-10-20'),
(6, 3, 347000, '1 Year', TRUE, '2024-10-20'),
(7, 3, 158000, '2 Year', TRUE, '2024-10-20'),
(8, 3, 182000, '3 Year', TRUE, '2024-10-20'),
(9, 3, 500000, '2 Year', TRUE, '2024-10-20'),
(10, 3, 295000, '1 Year', TRUE, '2024-10-20');