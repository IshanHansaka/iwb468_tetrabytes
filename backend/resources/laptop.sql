USE laptop_db

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
(5, 1, 215000, '2 Year', TRUE, '2024-10-20');

-- For the second API set (shop02)
INSERT INTO product (laptop_id, shop_id, price, warranty, in_stock, last_updated)
VALUES
(1, 2, 445000, '1 Year', TRUE, '2024-10-20'),
(2, 2, 305000, '2 Year', TRUE, '2024-10-20'),
(3, 2, 1393000, '2 Year', TRUE, '2024-10-20'),
(4, 2, 1585000, '2 Year', TRUE, '2024-10-20'),
(5, 2, 210000, '1 Year', FALSE, '2024-10-20');

-- For the third API set (shop03)
INSERT INTO product (laptop_id, shop_id, price, warranty, in_stock, last_updated)
VALUES
(2, 3, 325000, '1 Year', TRUE, '2024-10-20'),
(3, 3, 1400000, '3 Year', TRUE, '2024-10-20'),
(4, 3, 1600000, '3 Year', TRUE, '2024-10-20'),
(5, 3, 218000, '2 Year', TRUE, '2024-10-20');