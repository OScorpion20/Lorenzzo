import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imgUrl: string;
  oldPrice?: number;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const addProduct = (product: Product) => {
    axios.post('http://localhost:5000/products/add', product)
      .then(response => {
        console.log('Product added:', response.data);
        setProducts((prevProducts) => [...prevProducts, response.data]);
      })
      .catch(error => {
        console.error("There was an error adding the product!", error);
      });
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  const context = React.useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export { ProductProvider, useProductContext };
