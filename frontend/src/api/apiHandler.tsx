import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Define types for Laptop and CombinedData
interface Laptop {
  id: number;
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
}

interface Shop {
  id: number;
  name: string;
}

interface Product {
  laptop_id: number;
  shop_id: number;
  price: number;
  warranty: string;
  in_stock: boolean;
  last_updated: string;
}

interface CombinedData {
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

// Define the context value type
interface LaptopContextType {
  laptops: CombinedData[];
  loading: boolean;
  error: string | null;
}

// Create context
export const LaptopContext = createContext<LaptopContextType | undefined>(undefined);

// Provider component
export const LaptopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [laptops, setLaptops] = useState<CombinedData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data function
  const fetchData = async () => {
    try {
      setLoading(true);

      const laptopsResponse = await axios.get<Laptop[]>('http://localhost:9090/laptop/');
      const shopsResponse = await axios.get<Shop[]>('http://localhost:9090/shop');
      const productsResponse = await axios.get<Product[]>('http://localhost:9090/product');

      const laptops = laptopsResponse.data;
      const shops = shopsResponse.data;
      const products = productsResponse.data;

      // Combine data
      const combinedData = laptops.map((laptop) => {
        const laptopProducts = products.filter((product) => product.laptop_id === laptop.id);
        const shopDetails = laptopProducts.map((product) => {
          const shop = shops.find((shop) => shop.id === product.shop_id);
          return {
            shop_id: product.shop_id,
            shop_name: shop?.name || 'Unknown',
            price: product.price,
            warranty: product.warranty,
            in_stock: product.in_stock,
            last_updated: product.last_updated,
          };
        });

        return {
          laptop_id: laptop.id,
          brand: laptop.brand,
          model: laptop.model,
          processor: laptop.processor,
          ram: laptop.ram,
          storage: laptop.storage,
          display: laptop.display,
          gpu: laptop.gpu,
          weight: laptop.weight,
          battery: laptop.battery,
          image_link: laptop.image_link,
          shops: shopDetails,
        };
      });

      setLaptops(combinedData);
    } catch (err) {
      setError('Error fetching data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LaptopContext.Provider value={{ laptops, loading, error }}>
      {children}
    </LaptopContext.Provider>
  );
};