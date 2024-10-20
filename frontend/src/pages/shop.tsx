import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import ProductViewDialog from '../components/ProductViewDialog';

interface ShopProduct {
  laptop_id: number;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  display: string;
  gpu: string;
  weight: string;
  battery: string;
  image_link: string;
  shops: {
    shop_id: number;
    shop_name: string;
    price: number;
    warranty: string;
    in_stock: boolean;
    last_updated: string;
  }[];
}

const Shop: React.FC = () => {
  const products: ShopProduct[] = [
    {
      "laptop_id": 1,
      "brand": "ASUS",
      "model": "Vivobook Pro 15 Q543M Ultra9",
      "processor": "Intel® Core™ Ultra 9-185H (24M Cache, up to 5.10Hz, 16 Cores 22 Threads) with Intel AI Boost",
      "ram": "24GB DDR5 4800MHZ (8GB Onboard + 16GB Removable)",
      "storage": "2TB M.2 NVME SSD",
      "display": "15.6-inch, FHD (1920 x 1080) OLED",
      "gpu": "NVIDIA® GeForce RTX 3050 6GB GDDR6",
      "weight": "1.9kg",
      "battery": "75WHrs",
      "image_link": "https://www.nanotek.lk/uploads/product/2327-20240319135914-download%20(3).png",
      "shops": [
        {
          "shop_id": 1,
          "shop_name": "shop01",
          "price": 449000,
          "warranty": "1 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        },
        {
          "shop_id": 2,
          "shop_name": "shop02",
          "price": 445000,
          "warranty": "1 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        }
      ]
    },
    {
      "laptop_id": 2,
      "brand": "MSI",
      "model": "Cyborg 15 A13UCX",
      "processor": "Intel® Core™ i7-13620H (24M Cache, up to 4.90 GHz, 10 Core)",
      "ram": "16GB DDR5 4800MHZ",
      "storage": "512GB M.2 NVME GEN4 SSD",
      "display": "15.6\" 1080P 144Hz 45% NTSC IPS Level",
      "gpu": "NVIDIA® GeForce RTX 2050 4GB GDDR6",
      "weight": "1.98kg",
      "battery": "53.5WHrs",
      "image_link": "https://www.nanotek.lk/uploads/product/21-20240822142813-1675-20240723093908-CYBORG%20(1).png",
      "shops": [
        {
          "shop_id": 1,
          "shop_name": "shop01",
          "price": 304000,
          "warranty": "2 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        },
        {
          "shop_id": 2,
          "shop_name": "shop02",
          "price": 305000,
          "warranty": "2 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        },
        {
          "shop_id": 3,
          "shop_name": "shop03",
          "price": 325000,
          "warranty": "1 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        }
      ]
    },
    {
      "laptop_id": 3,
      "brand": "Lenovo",
      "model": "Legion 9 16IRX9",
      "processor": "Intel® Core™ i9-14900HX, 24 Cores 5.8GHz 36MB",
      "ram": "64GB DDR5 5600Mhz",
      "storage": "2TB NVME GEN4 M.2 SSD (1TB + 1TB)",
      "display": "16\" 3.2K (3200x2000) Mini LED 1200nits Anti-glare, 100% DCI-P3, 100% Adobe® RGB, 100% sRGB, 165Hz",
      "gpu": "NVIDIA RTX 4090 16GB GDDR6, 2040MHz, TGP 175W, 686 AI TOPS",
      "weight": "2.6 kg",
      "battery": "99.9 WHr",
      "image_link": "https://www.nanotek.lk/uploads/product/2470-20240731213957-Legion_9_16IRX9_CT1_01.png",
      "shops": [
        {
          "shop_id": 1,
          "shop_name": "shop01",
          "price": 1395000,
          "warranty": "2 Year",
          "in_stock": false,
          "last_updated": "2024-10-20"
        },
        {
          "shop_id": 2,
          "shop_name": "shop02",
          "price": 1393000,
          "warranty": "2 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        },
        {
          "shop_id": 3,
          "shop_name": "shop03",
          "price": 1400000,
          "warranty": "3 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        }
      ]
    },
    {
      "laptop_id": 4,
      "brand": "ASUS",
      "model": "ROG Strix SCAR 16 G634JZR",
      "processor": "Intel Core i9 14900HX (36MB Cache, up to 5.8 GHz, 24 cores, 32 Threads)",
      "ram": "32GB DDR5 5600MHZ (16GB x2)",
      "storage": "2TB PCIe® 4.0 NVMe® M.2 Performance SSD (1TB + 1TB)",
      "display": "16-inch QHD+ 16:10 (2560 x 1600, WQXGA) 240Hz ROG Nebula HDR Display, G-Sync and Pantone Validated",
      "gpu": "NVIDIA GeForce RTX 4080 -12GB GDDR6",
      "weight": "2.65 kg",
      "battery": "90WHrs",
      "image_link": "https://www.nanotek.lk/uploads/product/1421-20240311143728-h732%20(2).png",
      "shops": [
        {
          "shop_id": 1,
          "shop_name": "shop01",
          "price": 1589000,
          "warranty": "2 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        },
        {
          "shop_id": 2,
          "shop_name": "shop02",
          "price": 1585000,
          "warranty": "2 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        },
        {
          "shop_id": 3,
          "shop_name": "shop03",
          "price": 1600000,
          "warranty": "3 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        }
      ]
    },
    {
      "laptop_id": 5,
      "brand": "MSI",
      "model": "Modern 15 B13M",
      "processor": "Intel® Core™ i5-1335U (12MB Cache, up to 4.6 GHz, 10 cores, 12 Threads)",
      "ram": "16GB DDR4 3200MHZ (Onboard)",
      "storage": "512GB NVME GEN4 M.2 SSD",
      "display": "15.6” 1080P Display IPS LEVEL",
      "gpu": "Intel Iris Xe Graphics",
      "weight": "1.7kg",
      "battery": "39.3WHrs",
      "image_link": "https://www.nanotek.lk/uploads/product/2074-20240808155453-MODERN%20B12M.png",
      "shops": [
        {
          "shop_id": 1,
          "shop_name": "shop01",
          "price": 215000,
          "warranty": "2 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        },
        {
          "shop_id": 2,
          "shop_name": "shop02",
          "price": 210000,
          "warranty": "1 Year",
          "in_stock": false,
          "last_updated": "2024-10-20"
        },
        {
          "shop_id": 3,
          "shop_name": "shop03",
          "price": 218000,
          "warranty": "2 Year",
          "in_stock": true,
          "last_updated": "2024-10-20"
        }
      ]
    }
  ];

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]); // Adjusted range for laptops
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRAM, setSelectedRAM] = useState<string[]>([]);
  const [selectedProcessors, setSelectedProcessors] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);

  const filteredProducts = products.filter((product) => {
    const shop = product.shops[0]; // Use the first shop for filtering
    const inPriceRange = shop.price >= priceRange[0] && shop.price <= priceRange[1];
    const matchesRating = selectedRating === null; // Implement rating filtering as needed
    const inSelectedBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const inSelectedRAM = selectedRAM.length === 0 || selectedRAM.includes(product.ram);
    const inSelectedProcessors = selectedProcessors.length === 0 || selectedProcessors.includes(product.processor);

    return (
      inPriceRange &&
      matchesRating &&
      inSelectedBrand &&
      inSelectedRAM &&
      inSelectedProcessors
    );
  });

  const handleViewProduct = (product: ShopProduct) => {
    setSelectedProduct(product);
  };

  const handleCloseView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="shop-page">
      <div className="text">Products</div>
      <Header />
      <div className="content">
        <Sidebar
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedRAM={selectedRAM}
          setSelectedRAM={setSelectedRAM}
          selectedProcessors={selectedProcessors}
          setSelectedProcessors={setSelectedProcessors}
        />
        <div className="products-container">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.laptop_id} // Changed to laptop_id
              product={product}
              onView={handleViewProduct}
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductViewDialog
          product={selectedProduct}
          open={Boolean(selectedProduct)}
          onClose={handleCloseView}
        />
      )}
    </div>
  );
};

export default Shop;