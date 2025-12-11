import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('https://dummyjson.com/products');
      setProducts(data.products);
    }
    getData();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
