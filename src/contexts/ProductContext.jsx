import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

useEffect(() => {
      fetch("/api/products")
        .then(res => res.json())
        .then(data => setProducts(data.products))
        .catch(err => console.error("Error:", err));
    }, []);

  const getProductById = (id) => products.find((p) => p.id === id);

  return (
    <ProductContext value={{ products , getProductById }}>
      {children}
    </ProductContext>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}